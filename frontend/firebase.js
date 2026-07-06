// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sitegen-ai-8e0e0.firebaseapp.com",
  projectId: "sitegen-ai-8e0e0",
  storageBucket: "sitegen-ai-8e0e0.firebasestorage.app",
  messagingSenderId: "166023375142",
  appId: "1:166023375142:web:5719f2002562bf6ec5f9e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };