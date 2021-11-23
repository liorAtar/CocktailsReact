// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

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

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const logout = () => {
    return signOut(auth);
}

// Costum Hook
export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => { setCurrentUser(user) });
        return unsub;
    }, [])

    return currentUser;
}