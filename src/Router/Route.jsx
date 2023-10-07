import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home";
import Error from "../Pages/Errorpage/Error";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Privateroute from "./Privateroute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Order from "../Orders/Order";

const mycreatedroute = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                loader:()=>fetch('/DATA.json'),
                element:<Home></Home>
            },
            {
                path:"details/:id",
                loader:()=>fetch('/DATA.json'),
                element:<Privateroute><Details></Details></Privateroute>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/dashboard",
                element:<Privateroute><Dashboard></Dashboard></Privateroute>
            },
            {
                path:"/order",
                loader:()=>fetch('/DATA.json'),
                element:<Privateroute><Order></Order></Privateroute>
            }
        ]
    }
])

export default mycreatedroute;