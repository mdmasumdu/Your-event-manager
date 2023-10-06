/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firbase/firebase.config";



const Authprovider = ({children}) => {

    const [user,setUser] =useState(null)

    const auth = getAuth(app)

    const googleProvider = new GoogleAuthProvider()

    // sign in with google

    const  googlesignin=()=>{

        return signInWithPopup(auth,googleProvider)
    }
    
// signup with email and password

const createuser =(email,password)=>{
    return  createUserWithEmailAndPassword(auth,email,password)
 
 }

// sign with email and password

const login =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
 
 }

//  signout
const logout=()=>{
    signOut(auth)
}

// state observer
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
    setUser(currentuser)
});
return ()=>{
    unsubscribe()
}

},[])

   

 


    const authinfo ={
        googlesignin,
        createuser,
        login,
        logout,
        user

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default Authprovider;