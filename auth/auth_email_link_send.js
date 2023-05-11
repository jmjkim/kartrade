import { getAuth } from 'firebase/auth';
import { actionCodeSettings } from '../config/firebase'
import { sendSignInLinkToEmail } from 'firebase/auth';

const auth = getAuth()

const sendAuthLinkToEmail = (email) => {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again if they open the link on the same device.
        console.log("sendAuthLinkToEmail", "link authentication sent successfully to " + email);
        window.localStorage.setItem('emailForSignIn', email);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("sendAuthLinkToEmail", errorCode, errorMessage);
    })
}

export default sendAuthLinkToEmail