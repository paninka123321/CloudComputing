// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVa7tctuxJqBAxQ6NU6wWksHJ7nY4f7IM",
  authDomain: "psychological-app-a359c.firebaseapp.com",
  projectId: "psychological-app-a359c",
  storageBucket: "psychological-app-a359c.firebasestorage.app",
  messagingSenderId: "312700987588",
  appId: "1:312700987588:web:1336063a52ad5a08104191",
  measurementId: "G-V5631FJKXS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Fetch the user role from Firestore
const getUserRole = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().role; // role will be teacher, parent, or child
  }
  return null;
};

export { auth, getUserRole };
