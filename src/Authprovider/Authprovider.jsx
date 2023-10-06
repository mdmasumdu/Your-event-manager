/* eslint-disable react/prop-types */

import { createContext } from "react";

export const AuthContext = createContext()
import { getAuth } from "firebase/auth";
import app from "../firbase/firebase.config";



const Authprovider = ({children}) => {

    const auth = getAuth(app)
    return (
        <AuthContext.Provider>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default Authprovider;