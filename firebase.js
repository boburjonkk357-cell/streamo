import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJzUrxh_oCsa5DiPJZOEGRm480Wpkl5YQ",
  authDomain: "streamo-102e5.firebaseapp.com",
  projectId: "streamo-102e5",
  storageBucket: "streamo-102e5.firebasestorage.app",
  messagingSenderId: "498975534880",
  appId: "1:498975534880:web:ee8b08b050d5affba2f145"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
