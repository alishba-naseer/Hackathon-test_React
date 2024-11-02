

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDL4_y8usL6pf741GNmo4cWDGOQ8Flr_Qg",
    authDomain: "hackathon-test-a4d9f.firebaseapp.com",
    projectId: "hackathon-test-a4d9f",
    storageBucket: "hackathon-test-a4d9f.appspot.com",
    messagingSenderId: "660413460535",
    appId: "1:660413460535:web:7bd51b0c1a2c7d6904cfb2",
    databaseURL: "https://hackathon-test-a4d9f-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth =getAuth(app)
export {auth, db };



