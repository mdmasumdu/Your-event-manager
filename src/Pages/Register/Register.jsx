import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";



const Register = () => {

    const navigate = useNavigate()

// sing with email password context
    const {createuser,upadate} = useContext(AuthContext)
    const registernhandler =(e)=>{
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')


        if(password.length < 6){
          return   toast("PASSWORD must be 6 character long or more")
        }
        else if(!/[A-Z]/.test(password)){
          return  toast("PASSWORD must contain a capital letter")
        }
        else if(!/[^A-Za-z0-9]/.test(password)){
           return  toast("Password should have a special character")
        }
       

        createuser (email,password)
        .then(result=>{
            console.log(result.user)
            upadate(name,photo)
            .then(()=>{})
            .catch(()=>{})
            toast('Succesfully registerd')
            navigate('/')

        })
        .catch(err=> toast(`${err.message}`))



    }
    return (
        <div className="hero bg-white">
            <ToastContainer></ToastContainer>
  <div className="hero-content  w-full flex-col">
      <h1 className="text-5xl font-bold">Register now!</h1>
     
    
    <div className="card  md:w-3/6 shadow-2xl bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-500">
      <form  onSubmit={registernhandler} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Name</span>
          </label>
          <input type="text" placeholder="your name" name="name" className="input input-bordered bg-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Photo url</span>
          </label>
          <input type="text" placeholder="photo url" name="photo" className="input input-bordered bg-white" required />
        </div>
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
          <button className="btn bg-black text-purple-300">Register</button>
        </div>
      </form>
      <div>
            <p className="md:ml-5 mb-5">Already Have an account? Please <Link className="text-purple-600" to='/login'>Login</Link></p>
          </div>
    </div>
  </div>
</div>
    );
};

export default Register;