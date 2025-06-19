import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiEfvh-bTJb3fFm2VnzdzaNzrNGF1s23o",
  authDomain: "e-market-50a1e.firebaseapp.com",
  projectId: "e-market-50a1e",
  storageBucket: "e-market-50a1e.appspot.com",
  messagingSenderId: "504622798633",
  appId: "1:504622798633:web:580f23fedbb8d4a685c938",
  measurementId: "G-4X0QP47G8H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;