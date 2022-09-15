// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpuytWbjOty45ljd3lDqZuOdS4ocOJvfg",
  authDomain: "inventory-management-ecb46.firebaseapp.com",
  projectId: "inventory-management-ecb46",
  storageBucket: "inventory-management-ecb46.appspot.com",
  messagingSenderId: "1015522985495",
  appId: "1:1015522985495:web:d48606ed16a7cb7c51fe52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;