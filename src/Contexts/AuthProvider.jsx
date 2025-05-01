import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase_init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // onAuthStateChanged(auth, (currentUser)=>{
    //     if (currentUser) {
    //         console.log("User Found :", currentUser);
            
    //     }else{
    //         console.log("User Not Found :", currentUser);
    //     }
    // })

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
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;