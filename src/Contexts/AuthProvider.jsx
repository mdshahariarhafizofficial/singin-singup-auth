import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase_init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("inside useEffect ", currentUser);
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const userInfo = {
        user,
        createUser,
        logInUser,
        logOut,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;