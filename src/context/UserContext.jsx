import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';



// auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

//context
export const AuthContext = createContext()

const UserContext = ({children}) => {
    // user state
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


// user sign up
const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
};

// update user 
const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
        displayName: name,
    });
};

    // password verification
    const verifyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then(() => {
            alert('Please check Your email and verify email address');

        });
    };



    // user login by email
    const signInUser =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    
    // password reset
    const passwordReset=(email)=>{
        return sendPasswordResetEmail(auth,email);
    };


    // user login and registration by google
    const googleLogin =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    };

// user login and registration by GitHub
const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
};

    // user logout
    const logOut =()=>{
        signOut(auth).then(() => {
          }).catch((error) => {
          });
    };

    

    // observing user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('Observing user',currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        };
    },[]);


   // console.log('after observe and set in state we check the user:',user);
    


    const userInfo = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        verifyEmail,
        updateUserName,
        passwordReset,
        loading,
        user
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;

