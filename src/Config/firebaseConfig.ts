import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyD3u9sjfyPoNb94kkDgeOD1ZWIWUT1q0F4",
  authDomain: "leanlabs-fcd3f.firebaseapp.com",
  projectId: "leanlabs-fcd3f",
  storageBucket: "leanlabs-fcd3f.appspot.com",
  messagingSenderId: "998858880278",
  appId: "1:998858880278:web:2e146991e27c529ce68c37",
  measurementId: "G-KLXWTEYQZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
