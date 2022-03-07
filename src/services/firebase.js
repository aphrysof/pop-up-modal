// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN9VmtwsTzDynall8J_-Oejpd1TKHUIaA",
  authDomain: "popup-modal.firebaseapp.com",
  projectId: "popup-modal",
  storageBucket: "popup-modal.appspot.com",
  messagingSenderId: "876354649769",
  appId: "1:876354649769:web:e94f8b8f319848640db3b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//declaring the authentication variable 

export const authentication = getAuth(app)


