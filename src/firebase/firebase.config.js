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

const firebaseConfig = {
  apiKey: "AIzaSyBtmIij7mAaXMauuhArfOulMZrg9v6ibtA",

  authDomain: "winter-box.firebaseapp.com",

  projectId: "winter-box",

  storageBucket: "winter-box.firebasestorage.app",

  messagingSenderId: "695996750944",

  appId: "1:695996750944:web:cf52ca3d8b2f0cfbe77705",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
