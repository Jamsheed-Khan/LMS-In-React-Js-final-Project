// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCBKEcyuhs9BYrJob-sFV4FHiPfmlyf_iI",
    authDomain: "lms-in-react-final-project.firebaseapp.com",
    projectId: "lms-in-react-final-project",
    storageBucket: "lms-in-react-final-project.appspot.com",
    messagingSenderId: "762627856002",
    appId: "1:762627856002:web:e0034553536e2a5ded069b",
    measurementId: "G-SQC7C7W7D5"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, collection, addDoc, db, signOut, getAuth, GoogleAuthProvider, signInWithPopup,
}