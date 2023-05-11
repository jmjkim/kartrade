import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export default signIn