// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQS2B03JOoG2tZKVDQQ27nlG2BeQ_NMRs",
  authDomain: "netflixgpt-ebcd6.firebaseapp.com",
  projectId: "netflixgpt-ebcd6",
  storageBucket: "netflixgpt-ebcd6.appspot.com",
  messagingSenderId: "599049543174",
  appId: "1:599049543174:web:73911d2daf86ec7b87ed87",
  measurementId: "G-QE0ZCLELTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();