import { auth, provider, db, storage } from "./firebase.js";
import { signInWithPopup } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  collection, addDoc, getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
  ref, uploadBytes, getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// LOGIN
const loginBtn = document.getElementById("googleLogin");
if (loginBtn) {
  loginBtn.onclick = async () => {
    await signInWithPopup(auth, provider);
    alert("Login bo‘ldi!");
  };
}

// UPLOAD
const uploadForm = document.getElementById("uploadForm");
if (uploadForm) {
  uploadForm.onsubmit = async (e) => {
    e.preventDefault();

    const file = document.getElementById("video").files[0];
    const title = document.getElementById("title").value;
    const user = auth.currentUser;

    if (!user) return alert("Login qiling");

    const videoRef = ref(storage, `videos/${user.uid}/${file.name}`);
    await uploadBytes(videoRef, file);
    const url = await getDownloadURL(videoRef);

    await addDoc(collection(db, "videos"), {
      title,
      url,
      ownerId: user.uid,
      createdAt: Date.now()
    });

    alert("Video yuklandi!");
  };
}
