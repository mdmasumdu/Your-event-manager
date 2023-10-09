import { useContext } from "react";
import google from '/logo2.png'
import { AuthContext } from "../../Authprovider/Authprovider";
import { ToastContainer, toast } from 'react-toastify';

import {  Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

  const location = useLocation()
  const navigate = useNavigate()

// google singin context 
  const {googlesignin,login} = useContext(AuthContext)


    const loginhandler =(e)=>{
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const email = form.get('email')
        const password = form.get('password')

        login(email,password)
        .then(result=> {
          console.log(result.user)
          toast.success('succsfully logged in',{ onClose: ()=>{
            location.state ?   navigate(`${location.state}`) : navigate('/')
           }})
         
          
        })
        .catch(err=> toast(`${err.message}`))



    }

// google sign in func
    const googlesingin=()=>{
      googlesignin()
      .then(result=> {
        console.log(result.user)
        toast.success('Succsfully sign in',{ onClose: ()=>{
         location.state ?   navigate(`${location.state}`) : navigate('/')
        }})
      
      
      })
      .catch(err=>{
        console.error(err)
        toast('something went wrong')
      })
    }


    return (
        <div className="hero bg-white">
           <ToastContainer />
  <div className="hero-content  w-full flex-col">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    
    <div className="card  md:w-3/6 shadow-2x bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-500">
      <form  onSubmit={loginhandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered bg-white" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-black">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-purple-300">Login</button>
        </div>
       
      </form>
      <div>
      <img className='w-20 ml-5' onClick={googlesingin} src={google} alt="" />
            <p className="ml-5 mb-5">New Here? Please <Link className="text-purple-600" to='/register'>Register</Link></p>
          </div>

      
    </div>
  </div>
 
</div>
    );
};

export default Login;