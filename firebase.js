// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0banGUd6l8DhuedoRE0uks8KkkArXezM",
  authDomain: "p14-moon.firebaseapp.com",
  projectId: "p14-moon",
  storageBucket: "p14-moon.firebasestorage.app",
  messagingSenderId: "563311783097",
  appId: "1:563311783097:web:bf4d80c5ffa7e6df433f68",
  measurementId: "G-DZ0BFKG5RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);