import { Auth, getAuth, sendSignInLinkToEmail, signOut } from 'firebase/auth';
import { actionCodeSettings } from '@/config/firebase';

class FirebaseAuth {
  static sendAuthLinkToEmail = (email: string) => {
    const auth = getAuth();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('sendAuthLinkToEmail', errorCode, errorMessage);
      });
  };

  static signOut = () => {
    const auth = getAuth();

    return signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('user sign-out successful');
      })
      .catch((error) => {
        // An error happened.
        console.log('sign-out failed', error);
      });
  };

  listenAuthStateChange = () => {

  }
}
//
// const firebaseAuth = new FirebaseAuth();
// firebaseAuth.redbean = 100;
//
// const firebaseAuth2 = new FirebaseAuth();
// firebaseAuth2.redbean = 50;

export default FirebaseAuth;
