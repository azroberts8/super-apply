import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { createSignal } from "solid-js";

const firebaseConfig = {
  apiKey: "AIzaSyDGczq0KUtIwgqosWN2Og9LP6luJ8X7DwM",
  authDomain: "super-apply.firebaseapp.com",
  databaseURL: "https://super-apply-default-rtdb.firebaseio.com",
  projectId: "super-apply",
  storageBucket: "super-apply.firebasestorage.app",
  messagingSenderId: "766205360424",
  appId: "1:766205360424:web:1f0e5d739d898a7f4db81d"
};

const firebase = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(firebase);
const userSignal = createSignal(null);

export { auth, provider, userSignal }