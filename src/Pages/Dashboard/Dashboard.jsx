import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";


const Dashboard = () => {

    const {user}= useContext(AuthContext)
    console.log(user)
    return (
        <div className="bg-white flex justify-center p-5">

<div className="mockup-phone border-primary">
  <div className="camera"></div> 
  <div className="display">
        <div className="artboard artboard-demo phone-1">         
        <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={user.photoURL} />
        </div>
        </div>
        <h1>{user.displayName}</h1>
        <h1>{user.email}</h1></div>
        </div>
</div>

            
        </div>
    );
};

export default Dashboard;