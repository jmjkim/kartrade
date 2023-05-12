import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();

export const SignInWithPopup = (provider) => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("signInWithPopup", user);
      // IdP data available using getAdditionalUserInfo(result)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("signInWithPopup", errorCode, errorMessage);

      // The email of the user's account used.
      const email = error.customData.email;
      console.log("signInWithPopup", "The email of the user's account used", email);

      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("signInWithPopup", "The AuthCredential type that was used", credential);
    });
}