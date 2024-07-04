// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";

/*
const firebaseConfig = {
  apiKey: "AIzaSyBw8kPQkxNvVY2cB6ghVc20FlxhP4e_Xs4",
  authDomain: "testproj-531d7.firebaseapp.com",
  projectId: "testproj-531d7",
  storageBucket: "testproj-531d7.appspot.com",
  messagingSenderId: "705585244276",
  appId: "1:705585244276:web:6905459d1c0800f7ba0921",
  measurementId: "G-KWJSWQRNV0"
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyBCuhMzkMrLny3CHs-7vYk8JSPnEghzZfM",
  authDomain: "fun-chat-8b7cc.firebaseapp.com",
  projectId: "fun-chat-8b7cc",
  storageBucket: "fun-chat-8b7cc.appspot.com",
  messagingSenderId: "559391302102",
  appId: "1:559391302102:web:66d339ced16ac90980c477",
  measurementId: "G-BC3R32T0EQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
