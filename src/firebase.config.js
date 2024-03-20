// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkU7ty-jzlTtSCg5uJ3t2tveEXNQXTARA",
  authDomain: "otpproject-5c410.firebaseapp.com",
  projectId: "otpproject-5c410",
  storageBucket: "otpproject-5c410.appspot.com",
  messagingSenderId: "449029759715",
  appId: "1:449029759715:web:c99821fb09ec6340b9dbd6",
  measurementId: "G-SG14SGGV5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
