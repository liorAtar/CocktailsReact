// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGaKGdg15w0z_oxNTznX3EMIQTA24lihw",
    authDomain: "cocktailsreact.firebaseapp.com",
    projectId: "cocktailsreact",
    storageBucket: "cocktailsreact.appspot.com",
    messagingSenderId: "708198033820",
    appId: "1:708198033820:web:d5a0880bab2f1f902f4059",
    measurementId: "G-40M36KS6H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signup = async (email, password, firstName) => {
    await createUserWithEmailAndPassword(auth, email, password)
    updateProfile(auth.currentUser, {
        displayName: firstName
    })
}

export const login = async (email, password) => {
    // TODO: error handling
    const userC = await signInWithEmailAndPassword(auth, email, password);
    return userC;
}

export const logout = () => {
    return signOut(auth);
}