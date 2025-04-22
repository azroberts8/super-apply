import { getFirebaseRTDB } from "npm:@azroberts/easy-firebase-admin";

interface FirebaseArray<T> {
  [key: string]: T;
}

interface Experience {
  company: string;
  description?: string;
  role?: string;
}

interface JobQuery {
  company: string;
  query: string;
  status: "submitted" | "responded";
  user: string;
  companyBio?: string;
  recipient?: string;
  relatedExperience: FirebaseArray<Experience>;
  response?: string;
  roleTitle?: string;
  roleDescription?: string;
}

interface User {
  about: string;
  name: string;
  email: string;
  seeking?: string;
  skills?: string;
  experience: FirebaseArray<Experience>;
}

const database = getFirebaseRTDB(
  "https://super-apply-default-rtdb.firebaseio.com",
);

const get = <T = any>(path: string): Promise<T> => {
  const ref = database.ref(path);
  return new Promise((resolve, reject) => {
    ref.once("value", (snapshot) => {
      resolve(snapshot.val());
    });
  });
};

const firebase = { get };

export { database, firebase };
export type { JobQuery, User };
