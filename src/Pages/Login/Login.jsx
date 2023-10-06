

const Login = () => {



    const loginhandler =(e)=>{
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)



    }
    return (
        <div className="hero bg-white">
  <div className="hero-content  w-full flex-col">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    
    <div className="card  md:w-3/6 shadow-2xl bg-slate-400">
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
          <button className="btn bg-purple-600">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;