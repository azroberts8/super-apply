import { initializeApp, cert, App } from "npm:firebase-admin/app";
import { getDatabase } from "npm:firebase-admin/database";

const serviceAccount = JSON.parse(
  Deno.env.get("FIREBASE_SERVICE_ACCOUNT") as string,
);

const firebase: App = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://super-apply-default-rtdb.firebaseio.com",
});

const database = getDatabase(firebase);

export { database };
