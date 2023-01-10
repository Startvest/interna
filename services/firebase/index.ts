// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyBIX5CMPLhzHOy-mAV6zu9xIf9eVicN9Fg",
     authDomain: "interna-1bd0f.firebaseapp.com",
     projectId: "interna-1bd0f",
     storageBucket: "interna-1bd0f.appspot.com",
     messagingSenderId: "127111862326",
     appId: "1:127111862326:web:d0027676f2e01049302097",
     measurementId: "G-LCEK1NH4GT"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);