// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUE_oYI9QxRCcE1vChZxH58mDlJbjDpB8",
  authDomain: "discord-clone-a4ec3.firebaseapp.com",
  projectId: "discord-clone-a4ec3",
  storageBucket: "discord-clone-a4ec3.appspot.com",
  messagingSenderId: "749835621603",
  appId: "1:749835621603:web:6e8980f02ddc76625c21d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
