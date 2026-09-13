
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "botnex-ai.firebaseapp.com",
  projectId: "botnex-ai",
  storageBucket: "botnex-ai.firebasestorage.app",
  messagingSenderId: "653842881984",
  appId: "1:653842881984:web:ee38a83f72987182823c25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}
