// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfrVsBJyIJh_s9-2nNeLV20d2Rkl3nwI0",
  authDomain: "summative-project.firebaseapp.com",
  projectId: "summative-project",
  storageBucket: "summative-project.appspot.com",
  messagingSenderId: "736828228399",
  appId: "1:736828228399:web:9e7f58d5d37ced037ed7da",
  measurementId: "G-6MQ7JJ09SR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
