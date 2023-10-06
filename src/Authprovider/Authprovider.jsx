/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firbase/firebase.config";



const Authprovider = ({children}) => {
    
const [loading,setloading] =useState(true)

    const [user,setUser] =useState(null)

    const auth = getAuth(app)

    const googleProvider = new GoogleAuthProvider()

    // sign in with google

    const  googlesignin=()=>{
        setloading(true)

        return signInWithPopup(auth,googleProvider)
    }
    
// signup with email and password

const createuser =(email,password)=>{
    setloading(true)
    return  createUserWithEmailAndPassword(auth,email,password)
 
 }

// sign with email and password

const login =(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
 
 }

//  signout
const logout=()=>{
    setloading(true)
  return  signOut(auth)
}


// update user profile
const upadate =(name,photo)=>{
    setloading(true)
  return  updateProfile(auth.currentUser,{
        displayName: name, photoURL: photo
    })
}
// state observer
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
    setUser(currentuser)
    setloading(false)
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
        user,
        upadate,
        loading

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