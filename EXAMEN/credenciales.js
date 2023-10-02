// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDggHIhiem5gEWZ0A7p_SmjgYksk6p4V0I",
  authDomain: "crud-loguin.firebaseapp.com",
  projectId: "crud-loguin",
  storageBucket: "crud-loguin.appspot.com",
  messagingSenderId: "1071599438667",
  appId: "1:1071599438667:web:1952d5f2459d1c1069b6ce"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;