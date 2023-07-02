// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrliRyg2eaSOYvgmXnW1SCFjjyQD67Jy4",
  authDomain: "arrivo-api.firebaseapp.com",
  projectId: "arrivo-api",
  storageBucket: "arrivo-api.appspot.com",
  messagingSenderId: "102175070272",
  appId: "1:102175070272:web:f3c694a5da161d51a4e7a5",
  measurementId: "G-GKXKBFFQ3C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app;
