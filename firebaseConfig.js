// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // Import the initializeApp function
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
