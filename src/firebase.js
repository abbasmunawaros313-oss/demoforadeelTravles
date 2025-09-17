// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbbhdovY4_89hBlqpNvGFhJGOYKPArhZM",
  authDomain: "adeeltravles-b1281.firebaseapp.com",
  projectId: "adeeltravles-b1281",
  storageBucket: "adeeltravles-b1281.firebasestorage.app",
  messagingSenderId: "595430135879",
  appId: "1:595430135879:web:8f778e2b0680abb8167962",
  measurementId: "G-V9J1ZBSVR7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
