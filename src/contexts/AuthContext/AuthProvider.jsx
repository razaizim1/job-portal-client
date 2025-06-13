import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // Google Provider Instance
    const googleProvider = new GoogleAuthProvider;

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setLoading(false));
    };

    // create an observer for user login state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('has user', currentUser);

            if (currentUser?.email) {
                const userData = { email: currentUser.email };
                axios.post('http://localhost:3000/jwt', userData,{
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
            setUserInfo(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, []);

    // logOut User
    const logout = () => {
        setLoading(true);
        return signOut(auth)
    };


    const authInfo = {
        userInfo,
        loading,
        logout,
        createUser,
        signInWithGoogle
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;