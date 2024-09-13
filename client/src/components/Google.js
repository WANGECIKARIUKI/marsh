import React from 'react';
import firebase from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function Google() {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(firebase.auth(), provider);
      // Handle successful Google sign-in

    } catch (error) {
        alert(error);
      // Handle Google sign-in errors
    }
  };

  return (
    <button onClick={handleGoogleSignIn}>Sign in with Google</button>
  );
}

export default Google;