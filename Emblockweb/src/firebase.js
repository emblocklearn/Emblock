import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Correct import for Firestore
import { getStorage } from "firebase/storage"; // Correct import for Storage

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCreflX62JemxL0z_njqDdHw1vh0eqG8TU",
  authDomain: "project-emblock.firebaseapp.com",
  projectId: "project-emblock",
  storageBucket: "project-emblock.appspot.com",
  messagingSenderId: "1087971879166",
  appId: "1:1087971879166:web:83b3251c5dc6aaf6331daf",
  measurementId: "G-6N7FYEPR5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Storage

export { db, storage }; // Export Firestore and Storage
