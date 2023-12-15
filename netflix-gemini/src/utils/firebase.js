// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtHvsvO3xLJX4fWHiBSO-MUpTNyRBcDt8",
  authDomain: "netflixgpt-cc9c4.firebaseapp.com",
  projectId: "netflixgpt-cc9c4",
  storageBucket: "netflixgpt-cc9c4.appspot.com",
  messagingSenderId: "410977158597",
  appId: "1:410977158597:web:ce2292953c0bd3a26eb7ac",
  measurementId: "G-2EX601V7BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
