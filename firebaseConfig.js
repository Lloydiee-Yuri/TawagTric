// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAnMY4wSYFCdEZ41SEWrgncvcH3zNqiug",
  authDomain: "tawagtest.firebaseapp.com",
  projectId: "tawagtest",
  storageBucket: "tawagtest.appspot.com",
  messagingSenderId: "6235405616",
  appId: "1:6235405616:web:4a34c5f7a7fa50b1999cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);