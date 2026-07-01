import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aivoiceassist-908a0.firebaseapp.com",
  projectId: "aivoiceassist-908a0",
  storageBucket: "aivoiceassist-908a0.firebasestorage.app",
  messagingSenderId: "187649318489",
  appId: "1:187649318489:web:5aa0a144810ab08d7c5b48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}

