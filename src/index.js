import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnxxJTAmz3oDJXWe64ZwSZZxThB4Mqihc",
  authDomain: "portfolio-73271.firebaseapp.com",
  projectId: "portfolio-73271",
  storageBucket: "portfolio-73271.appspot.com",
  messagingSenderId: "455265000039",
  appId: "1:455265000039:web:b2e6ca8dbadc850268d2c2",
  measurementId: "G-XK91DTCEE1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
