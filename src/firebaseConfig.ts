
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUx-Dky_6lvuQG5gcVhQZ6zBO5Jq-QW94",
  authDomain: "beauty-parlour-cc166.firebaseapp.com",
  projectId: "beauty-parlour-cc166",
  storageBucket: "beauty-parlour-cc166.firebasestorage.app",
  messagingSenderId: "6342784084",
  appId: "1:6342784084:web:de04c1e1c149a9f990a9c1",
  measurementId: "G-9RZC416SHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
