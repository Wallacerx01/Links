import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQQbVJ1hr5gcV9ZDTtip_AyWypZZSyFYQ",
  authDomain: "reactlinks-486d9.firebaseapp.com",
  projectId: "reactlinks-486d9",
  storageBucket: "reactlinks-486d9.firebasestorage.app",
  messagingSenderId: "745536945397",
  appId: "1:745536945397:web:f5867834059098643fd9bc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
