import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAxnW1xwSo9gqsfE4Nn1sCVa1EMJipCo2Q",
    authDomain: "zenchat-fb1a3.firebaseapp.com",
    projectId: "zenchat-fb1a3",
    storageBucket: "zenchat-fb1a3.appspot.com",
    messagingSenderId: "68774239274",
    appId: "1:68774239274:web:1e5b72ba48452012bc3753"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);