// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/functions';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARqx6viTHrp_xTiULVg1Bb9BVF9S-4rWc",
  authDomain: "email-firebase-caf34.firebaseapp.com",
  projectId: "email-firebase-caf34",
  storageBucket: "email-firebase-caf34.appspot.com", // Fixed the storage bucket format
  messagingSenderId: "91392321237",
  appId: "1:91392321237:web:c7a930480303420580645c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const functions = firebase.functions();


export default firebase;
export { functions };