// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrrKLoQkViDtXq-pRTtSSU0j6VTiT9Q84",
    authDomain: "email-and-password-verified.firebaseapp.com",
    projectId: "email-and-password-verified",
    storageBucket: "email-and-password-verified.appspot.com",
    messagingSenderId: "1034162611619",
    appId: "1:1034162611619:web:97d6b93e0ce339946fa616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;