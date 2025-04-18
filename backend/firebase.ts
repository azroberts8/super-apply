import { getFirebaseRTDB } from "npm:@azroberts/easy-firebase-admin";

const database = getFirebaseRTDB(
  "https://super-apply-default-rtdb.firebaseio.com",
);

export { database };
