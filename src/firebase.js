import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAHddzlBABTPaMMFWWm0JfREooVEWoHstM",
    authDomain: "handsin-d4181.firebaseapp.com",
    projectId: "handsin-d4181",
    storageBucket: "handsin-d4181.firebasestorage.app",
    messagingSenderId: "479460756652",
    appId: "1:479460756652:web:633e6a044ef393c1986309",
    measurementId: "G-XSQPTSJWFT"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

