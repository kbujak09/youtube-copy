// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLMsjlUDMmNtNxMySD4c07gQcvXUDd2iM",
  authDomain: "copy-c2e75.firebaseapp.com",
  projectId: "copy-c2e75",
  storageBucket: "copy-c2e75.appspot.com",
  messagingSenderId: "112251022137",
  appId: "1:112251022137:web:0f57aea9b97e84d2bd96e8",
  measurementId: "G-540X3K5L72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);