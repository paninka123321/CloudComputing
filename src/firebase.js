// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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

export { auth };
