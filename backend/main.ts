import { database } from "./firebase.ts";

const ref = database.ref("/test");
ref.on("value", (snapshot) => {
  console.log(snapshot.val());
});
