import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDR_Vp2Ti-iqIFc3N_GKYDYOhcSH02Fo54",
  authDomain: "sistem-tertanam-22040.firebaseapp.com",
  databaseURL: "https://sistem-tertanam-22040-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sistem-tertanam-22040",
  storageBucket: "sistem-tertanam-22040.appspot.com",
  messagingSenderId: "823376256902",
  appId: "1:823376256902:web:42af5418d6b62e64309607",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Myconfig = getDatabase(app);

