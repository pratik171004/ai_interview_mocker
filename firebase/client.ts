
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWtvk9Ddr-62YjlaNrSRXI1CQOHfLI8JA",
  authDomain: "prepwise-23280.firebaseapp.com",
  projectId: "prepwise-23280",
  storageBucket: "prepwise-23280.firebasestorage.app",
  messagingSenderId: "530510525774",
  appId: "1:530510525774:web:75fbbd8a1fc5b50102da1f",
  measurementId: "G-ER8RW3TGPM"
};

const app = !getApps.length ? initializeApp(firebaseConfig):getApp();
export const auth=getAuth(app);
export const db=getFirestore(app);