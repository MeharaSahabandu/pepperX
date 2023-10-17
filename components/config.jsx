// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDum43ZlOcjCdM0ibIC2KPSWX3bHi5udr4",
  authDomain: "ueepepperx.firebaseapp.com",
  projectId: "ueepepperx",
  storageBucket: "ueepepperx.appspot.com",
  messagingSenderId: "976377739587",
  appId: "1:976377739587:web:2b121f4ac9aa1a735357f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Intialize Firestore
export const db = getFirestore(app);
