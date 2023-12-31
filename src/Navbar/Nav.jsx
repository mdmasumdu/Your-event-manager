import { Link, NavLink } from "react-router-dom";
import logo from '/Red_Round_Creative_Agency_Logo_-removebg-preview.png'
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";


const Nav = () => {

  const {user,logout} = useContext(AuthContext)


  const signout=()=>{
    logout()
    .then()
    .catch()
  }

    const  links =<>
    <NavLink className={({isActive})=>  isActive ? 'bg-slate-100 rounded p-1' : ""} to='/'>Home</NavLink>
    
    {
      user ?  '': <NavLink className={({isActive})=>  isActive ? 'bg-slate-100 rounded p-1' : ""} to='/register'>Registration</NavLink>
    }
    
    {
      user ?  <div className="flex gap-5"><NavLink className={({isActive})=>  isActive ? 'bg-slate-100 rounded p-1' : ""} to='/order'>Order</NavLink> <NavLink to='/dashboard'>Dashboard</NavLink></div> : ""
    }
    
    </>

    const  linka =<>
    <NavLink className={({isActive})=>  isActive ? 'bg-slate-100 rounded p-1' : ""} to='/'>Home</NavLink>
    
    {
      user ?  '': <NavLink className={({isActive})=>  isActive ? 'bg-slate-100 rounded p-1' : ""} to='/register'>Registration</NavLink>
    }
    
    {
      user ?  <div className="flex flex-col"><NavLink className={({isActive})=>  isActive ? 'bg-slate-100 rounded p-1' : ""} to='/order'>Order</NavLink> <NavLink to='/dashboard'>Dashboard</NavLink></div> : ""
    }
    
    </>
    return (
        <div className="navbar bg-amber-400"  data-aos="fade-down" data-aos-duration='1000'>
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 flex-col">
        {
            linka
        }
      </ul>
    </div>
    <a><img className="w-28" src={logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 font-bold text-xl">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
     user?  <h1>{user?.displayName}</h1> : ""
    }
  {
    user ? <div className="avatar  ml-2 mr-2">
    <div className="w-10 rounded-full">
      <img className="bg-white" src={user?.photoURL} />
    </div>
  </div> : ""
  }
     {
      user ? <a className="btn bg-purple-600" onClick={signout}>Logout</a> : <Link className="btn" to="/login">Login</Link>
     }
  </div>
</div>
    );
};

export default Nav;