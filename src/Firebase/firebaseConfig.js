// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLZ42siNRmHVAhqDknFpV7bOErRATOqME",
  authDomain: "realmodph.firebaseapp.com",
  databaseURL: "https://realmodph-default-rtdb.firebaseio.com",
  projectId: "realmodph",
  storageBucket: "realmodph.appspot.com",
  messagingSenderId: "343017678164",
  appId: "1:343017678164:web:e244a6a019318eb0fdd4c1",
  measurementId: "G-JKMR5KZRLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const google = new GoogleAuthProvider();
const facebook = new GoogleAuthProvider();
const baseDato = getFirestore();

export {
    app,
    google,
    facebook,
    baseDato,
  
  }




