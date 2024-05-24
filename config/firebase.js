// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc  } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmGQEMwUhlkyvPQWu-tnYZ-zD7kF1jT9A",
  authDomain: "etudelite-2c293.firebaseapp.com",
  projectId: "etudelite-2c293",
  storageBucket: "etudelite-2c293.appspot.com",
  messagingSenderId: "910090997362",
  appId: "1:910090997362:web:b65dca2c12982fbf98bceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);
export {app,db,getFirestore,collection, addDoc}