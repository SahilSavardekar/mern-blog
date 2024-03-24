// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2cf93.firebaseapp.com",
  projectId: "mern-blog-2cf93",
  storageBucket: "mern-blog-2cf93.appspot.com",
  messagingSenderId: "259917616446",
  appId: "1:259917616446:web:e0bc538d9b760bd2cd086f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);