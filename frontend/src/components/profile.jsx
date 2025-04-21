import { createSignal } from "solid-js";
import { userSignal } from "../utils/firebase";
import { getDatabase, ref, set, get, child } from "firebase/database";

export function Profile() {
  const [user] = userSignal;
  const database = getDatabase();
  const userRef = ref(database, `users/${user().uid}`);

  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [about, setAbout] = createSignal("");
  const [seeking, setSeeking] = createSignal("");

  get(userRef)
    .then(snapshot => {
      if(snapshot.exists()) {
        const val = snapshot.val();
        setName(val.name);
        setEmail(val.email);
        setAbout(val.about);
        setSeeking(val.seeking);
      } else {
        set(userRef, {
          name: user().displayName,
          email: user().email,
          about: "",
          seeking: ""
        });
        setName(user().displayName);
        setEmail(user().email);
        setAbout("");
        setSeeking("");
      }
    });

  const save = () => {
    set(userRef, {
      name: name(),
      email: email(),
      about: about(),
      seeking: seeking()
    });
  }

  return(
    <div>
      <h2>Profile</h2>
      Name: <input type="text" value={name()} onBlur={ e => setName(e.currentTarget.value) } /><br />
      Email: <input type="text" value={email()} onBlur={ e => setEmail(e.currentTarget.value) } /><br />
      About: <textarea value={about()} onBlur={ e => setAbout(e.currentTarget.value) }></textarea><br />
      Seeking: <textarea value={seeking()} onBlur={ e => setSeeking(e.currentTarget.value) }></textarea><br />
      <br />
      <button onClick={save}>Save</button>
    </div>
  );
}