import { createSignal, onCleanup, onMount, Show } from "solid-js";
import { auth, userSignal } from "./utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { SignIn } from "./components/signIn";
import { A } from "@solidjs/router";

const App = (props) => {
  const [user, setUser] = userSignal;
  const [loading, setLoading] = createSignal(true);

  onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    onCleanup(() => unsubscribe());
  })

  return(
    <div>
      <div >
        <h1>Super Apply</h1>
      </div>
      <Show when={!loading()}>
        <Show when={user()} fallback={SignIn}>
          <nav>
            <ul>
              <li><A href="/super-apply">Profile</A></li>
              <li><A href="/super-apply/intro">Introductions</A></li>
            </ul>
          </nav>
          <button onClick={() => signOut(auth)}>Logout</button>

          {props.children}
        
        </Show>
      </Show>
    </div>
  )
}

export default App;
