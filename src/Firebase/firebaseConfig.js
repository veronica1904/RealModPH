import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


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
const facebook = new FacebookAuthProvider();
const baseDato = getFirestore();

export {
    app,
    google,
    facebook,
    baseDato,
  
  }




