// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXRLnoYTiz6IurwOFxFLuq0GvJ9GX-FG4",
  authDomain: "coffee-store-1.firebaseapp.com",
  projectId: "coffee-store-1",
  storageBucket: "coffee-store-1.appspot.com",
  messagingSenderId: "309213187805",
  appId: "1:309213187805:web:6567fab0ce38d751255534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
