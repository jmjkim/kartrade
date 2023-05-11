import { getAuth } from 'firebase/auth';
import { signOut } from "firebase/auth";

const auth = getAuth()

const signOutUser = () => {    
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("user sign-out successful");
    }).catch((error) => {
        // An error happened.
        console.log("sign-out failed", error);
    });
}

export default signOutUser

