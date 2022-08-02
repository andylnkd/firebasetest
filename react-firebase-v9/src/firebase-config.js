// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC34zqt_gaWDMUMJxFbU5BhtSNScLi3Gwg",
  authDomain: "test-7ab75.firebaseapp.com",
  databaseURL: "https://test-7ab75-default-rtdb.firebaseio.com",
  projectId: "test-7ab75",
  storageBucket: "test-7ab75.appspot.com",
  messagingSenderId: "779566169000",
  appId: "1:779566169000:web:ebe67c40430dc64f92bb9d",
  measurementId: "G-ZGY7GK46WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);