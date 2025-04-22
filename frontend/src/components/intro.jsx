import { createSignal, Show } from "solid-js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  push,
  update,
  onValue,
} from "firebase/database";
import { userSignal } from "../utils/firebase";

export function Intro() {
  const database = getDatabase();
  const [user] = userSignal;

  const [companyName, setCompanyName] = createSignal("");
  const [recipientName, setRecipientName] = createSignal("");
  const [roleTitle, setRoleTitle] = createSignal("");
  const [aboutCompany, setAboutCompany] = createSignal("");
  const [aboutRole, setAboutRole] = createSignal("");

  const [submitted, setSubmitted] = createSignal(false);
  const [response, setResponse] = createSignal(null);

  const generateIntro = () => {
    setSubmitted(true);

    const query = {
      company: companyName(),
      query: "introduction",
      status: "submitted",
      user: user().uid,
      companyBio: aboutCompany(),
      recipient: recipientName(),
      relatedExperience: {},
      roleTitle: roleTitle(),
      roleDescription: aboutRole(),
    };

    const key = push(child(ref(database), "queries")).key;
    const updates = {};
    updates["/queries/" + key] = query;
    update(ref(database), updates);

    onValue(ref(database, `/queries/${key}`), (snapshot) => {
      const data = snapshot.val();
      if (data.status !== "submitted") setResponse(data.response);
    });
  };

  return (
    <div>
      <h2>Generate Introduction</h2>
      Company Name:{" "}
      <input
        type="text"
        value={companyName()}
        onBlur={(e) => setCompanyName(e.currentTarget.value)}
      />
      <br />
      Recipient Name:{" "}
      <input
        type="text"
        value={recipientName()}
        onBlur={(e) => setRecipientName(e.currentTarget.value)}
      />
      <br />
      Desired Role Title:{" "}
      <input
        type="text"
        value={roleTitle()}
        onBlur={(e) => setRoleTitle(e.currentTarget.value)}
      />
      <br />
      About Company:{" "}
      <textarea
        value={aboutCompany()}
        onBlur={(e) => setAboutCompany(e.currentTarget.value)}
      ></textarea>
      <br />
      About the Role:{" "}
      <textarea
        value={aboutRole()}
        onBlur={(e) => setAboutRole(e.currentTarget.value)}
      ></textarea>
      <br />
      <button onClick={generateIntro}>Generate</button>
      <Show when={submitted()}>
        <Show when={response()} fallback={<div>Loading...</div>}>
          <h3>
            Introduction to {recipientName()} at {companyName()}
          </h3>
          <div>{response()}</div>
        </Show>
      </Show>
    </div>
  );
}
