import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCuR5nsDi_22pkr_P_0hoJ9CTDF5YbRQHo",
    authDomain: "bag-auth.firebaseapp.com",
    projectId: "bag-auth",
    storageBucket: "bag-auth.appspot.com",
    messagingSenderId: "422671566761",
    appId: "1:422671566761:web:d4c4e7e33d70988a3626b8",
    measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

