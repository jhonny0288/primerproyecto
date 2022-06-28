import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBsvIBwY1gqYmxtZ6HlHY-3OL1sGO4eYF4",
    authDomain: "proyecto-react-f40df.firebaseapp.com",
    projectId: "proyecto-react-f40df",
    storageBucket: "proyecto-react-f40df.appspot.com",
    messagingSenderId: "44975059984",
    appId: "1:44975059984:web:647dd88f097351f09b8695",
    measurementId: "G-RE4LJ6KBQH"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  export {auth, createUserWithEmailAndPassword}