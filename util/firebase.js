// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCfFIRvBz9V4kyQrDKJrPFme9tVt5vFrBs",
  authDomain: "my-blog-1cdb5.firebaseapp.com",
  projectId: "my-blog-1cdb5",
  storageBucket: "my-blog-1cdb5.appspot.com",
  messagingSenderId: "783765600768",
  appId: "1:783765600768:web:0493749af17f4a899eb6e5",
  measurementId: "G-8PTXHLD6F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();

export { auth , provider };
