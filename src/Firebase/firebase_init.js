// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS6bvj7ePoCc0_tE5E6i-f9QFhXmwcvvg",
  authDomain: "singin-singup-auth-e8ab8.firebaseapp.com",
  projectId: "singin-singup-auth-e8ab8",
  storageBucket: "singin-singup-auth-e8ab8.firebasestorage.app",
  messagingSenderId: "768010014810",
  appId: "1:768010014810:web:481fba48945b40036e0863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);