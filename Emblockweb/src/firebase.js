// firebase.js (or firebaseConfig.js, depending on your file structure)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEyHHTq7X6wvS2epVD9vM_Kt_w18NfQxg",
  authDomain: "emblock-3a756.firebaseapp.com",
  projectId: "emblock-3a756",
  storageBucket: "emblock-3a756.appspot.com",
  messagingSenderId: "364457031684",
  appId: "1:364457031684:web:b99c035b963f5961d41d51",
  measurementId: "G-132X1BMNQT"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
export const db = getFirestore(app);