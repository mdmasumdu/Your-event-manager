/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {

const location = useLocation()
console.log(location)

    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }


    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Privateroute;