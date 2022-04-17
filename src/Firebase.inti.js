// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAi9CPJSN-LqKCf_T14Wbh5jv3bq9ApT9I",
    authDomain: "yoga-pro-5222c.firebaseapp.com",
    projectId: "yoga-pro-5222c",
    storageBucket: "yoga-pro-5222c.appspot.com",
    messagingSenderId: "208617548400",
    appId: "1:208617548400:web:f0e012eb4150b25a97e2b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

