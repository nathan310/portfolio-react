// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnLjUN9kXU6ZTjon5_0DdQZreDrIlxhT0",
  authDomain: "my-portfolio-app-ac14a.firebaseapp.com",
  projectId: "my-portfolio-app-ac14a",
  storageBucket: "my-portfolio-app-ac14a.appspot.com",
  messagingSenderId: "421203936733",
  appId: "1:421203936733:web:e28f9f251ef8ce24952234",
  measurementId: "G-1H0M56TT5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirestoreDB = getFirestore(app);
const analytics = getAnalytics(app);