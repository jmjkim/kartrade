import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";

const auth = getAuth()

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("user is currently signed in with uid:", uid);
  } else {
    // User is signed out
    console.log("onAuthStateChanged: user is signed out");
  }
});