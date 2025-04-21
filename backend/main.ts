import { database, firebase, JobQuery, User } from "./firebase.ts";

const queriesRef = database.ref("/queries");
queriesRef.on("child_added", async snapshot => {
  const query: JobQuery = snapshot.val();
  if(query.status !== "submitted") return;
  
  const user = await firebase.get<User>(`/users/${ query.user }`);

  

  console.log(user);
});
