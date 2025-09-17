// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzojxzDVVblL_jV-yzPgc2q0RAb9U7A2g",
  authDomain: "kstravelportal.firebaseapp.com",
  projectId: "kstravelportal",
  storageBucket: "kstravelportal.firebasestorage.app",
  messagingSenderId: "1041901376235",
  appId: "1:1041901376235:web:d526c36ab3a5bcfd8a64ae",
  measurementId: "G-5D9ZKXNPLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
