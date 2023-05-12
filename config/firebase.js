import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJ0M4sYSGSGKkT_jTQpwh3KMSyu1WlNBM",
  authDomain: "kartrade-development.firebaseapp.com",
  projectId: "kartrade-development",
  storageBucket: "kartrade-development.appspot.com",
  messagingSenderId: "568684921238",
  appId: "1:568684921238:web:bd47e155aa3172946c1db7"
}

export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://localhost:3000/',

  // This must be true.
  handleCodeInApp: true,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
