import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";

export function SignIn() {
  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch(err) {
      console.error("Sign-in error:", err);
    }
  }

  return(
    <div>
      <center>
        <h2>Sign in to continue</h2>
        <button onClick={signIn}>Sign In</button>
      </center>
    </div>
  )
}