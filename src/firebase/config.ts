// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVn_5_QTtvOWgXdWSwYHQfN4x1DgYvfUU",
  authDomain: "astro-authentication-61adc.firebaseapp.com",
  projectId: "astro-authentication-61adc",
  storageBucket: "astro-authentication-61adc.firebasestorage.app",
  messagingSenderId: "53449388342",
  appId: "1:53449388342:web:563f8b39e9911e655b0397",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = "es";

export const firebase = {
  app,
  auth,
};
