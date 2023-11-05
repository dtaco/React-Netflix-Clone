import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBfgivCTGV6WuJkHfrhjocCOFGs-rPNHgA",
  authDomain: "react-netflix-clone-b65da.firebaseapp.com",
  projectId: "react-netflix-clone-b65da",
  storageBucket: "react-netflix-clone-b65da.appspot.com",
  messagingSenderId: "892164832370",
  appId: "1:892164832370:web:2f4ac107b63f71d6d256eb",
  measurementId: "G-PYFC5VPS50"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
