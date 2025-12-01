import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA14pJ3ek6rWWPbgG3Wl9om58OpKvx7JXg",
  authDomain: "project-irynaz3-1-1e370.firebaseapp.com",
  projectId: "project-irynaz3-1-1e370",
  storageBucket: "project-irynaz3-1-1e370.firebasestorage.app",
  messagingSenderId: "806653304212",
  appId: "1:806653304212:web:21c2b4f76458ff5a478381",
  measurementId: "G-MYKV4V74JE"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
