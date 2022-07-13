// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCTgPw7RCiu6ms1L2OkJeWT2mzAvbzkNPs",
    authDomain: "reactmotos.firebaseapp.com",
    projectId: "reactmotos",
    storageBucket: "reactmotos.appspot.com",
    messagingSenderId: "171243477332",
    appId: "1:171243477332:web:c14662fdecbd97d753d0c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);