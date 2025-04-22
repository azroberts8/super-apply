import { database, firebase, JobQuery, User } from "./firebase.ts";
import OpenAI from "npm:openai";

const gpt = new OpenAI();

const queriesRef = database.ref("/queries");
queriesRef.on("child_added", async (snapshot) => {
  const query: JobQuery = snapshot.val();
  if (query.status !== "submitted") return;

  const user = await firebase.get<User>(`/users/${query.user}`);

  const response = await gpt.responses.create({
    model: "gpt-4.1",
    temperature: 1.1,
    store: true,
    input: [
      {
        role: "developer",
        content: `Write 5 sentences to ${query.recipient && query.recipient !== "" ? query.recipient : query.company} introducing myself to them. The introduction should sound professional and personal expressing why I am interested in joining their team at ${query.company}. Avoid sounding overly egotistical.`,
      },
      {
        role: "user",
        content: `About me: ${user.about}
        ${user.seeking && user.seeking !== "" ? `I'm seeking: ${user.seeking}` : ""}
        ${user.skills && user.skills !== "" ? `My skills: ${user.skills}` : ""}
        ${query.companyBio && query.companyBio !== "" ? `About ${query.company}: ${query.companyBio}` : ""}
        ${query.roleDescription && query.roleDescription !== "" ? `Role description${query.roleTitle && query.roleTitle !== "" ? ` (${query.roleTitle})` : ""}: ${query.roleDescription}` : ""}
        `,
      },
    ],
  });

  snapshot.ref.child("response").set(response.output_text);
  snapshot.ref.child("status").set("complete");
});
