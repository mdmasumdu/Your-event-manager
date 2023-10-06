import { NavLink } from "react-router-dom";
import logo from '/Red_Round_Creative_Agency_Logo_-removebg-preview.png'


const Nav = () => {

    const  links =<>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/'>Blog</NavLink>
    <NavLink to='/'>Registration</NavLink>
    <NavLink to='/login'>Login</NavLink>
    <NavLink to='/'>Dashboard</NavLink>
    
    </>
    return (
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            links
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
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Nav;