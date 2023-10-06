import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home";
import Error from "../Pages/Errorpage/Error";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";

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
                element:<Details></Details>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])

export default mycreatedroute;