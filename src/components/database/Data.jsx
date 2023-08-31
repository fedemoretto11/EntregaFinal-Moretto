import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtNrnqkOe51YI7V_UIvh3Gx-dyDbFx94c",
  authDomain: "proyecto-react-coder-92205.firebaseapp.com",
  projectId: "proyecto-react-coder-92205",
  storageBucket: "proyecto-react-coder-92205.appspot.com",
  messagingSenderId: "129066241",
  appId: "1:129066241:web:77e67f4551e286f218a700"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

