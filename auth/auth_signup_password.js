/* eslint-disable react-hooks/rules-of-hooks */
import { getAuth } from 'firebase/auth';
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const signUp = () => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export default signUp