// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTyv7VfgwDVbpTWPE3IyEr1NCiolj6m0M",
  authDomain: "house-market-2927f.firebaseapp.com",
  projectId: "house-market-2927f",
  storageBucket: "house-market-2927f.appspot.com",
  messagingSenderId: "896080903027",
  appId: "1:896080903027:web:91f1f2f2714f7011c36306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore();