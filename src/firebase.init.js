// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyDe-ahBUdgrcti7wuWySA9wPCdoMx3m1eA",
  authDomain: "doctors-portal-7d5d7.firebaseapp.com",
  projectId: "doctors-portal-7d5d7",
  storageBucket: "doctors-portal-7d5d7.appspot.com",
  messagingSenderId: "99707046025",
  appId: "1:99707046025:web:7a596bfc7c5e778fc5de58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
