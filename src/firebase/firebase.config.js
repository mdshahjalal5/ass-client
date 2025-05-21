// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
}; */

//email:healthcare  flavor-book
const firebaseConfig = {
  apiKey: "AIzaSyB3PeX13tBoQ65pO9kRKulB8n9PpiZIabg",

  authDomain: "flavor-book-6e9a8.firebaseapp.com",

  projectId: "flavor-book-6e9a8",

  storageBucket: "flavor-book-6e9a8.firebasestorage.app",

  messagingSenderId: "799865113025",

  appId: "1:799865113025:web:54983dd84f850eea1c4740",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
