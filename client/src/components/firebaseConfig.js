import'firebase/compat/auth';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database';
//import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCjUogGjTRSDHKhme8MwHHFFm4XRuYmsD4",
  authDomain: "marsh-b2ad5.firebaseapp.com",
  projectId: "marsh-b2ad5",
  storageBucket: "marsh-b2ad5.appspot.com",
  messagingSenderId: "656494436860",
  appId: "1:656494436860:web:fb6286d76442d1568c5279",
  measurementId: "G-300QK8KC6S"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;