import banner from '/Banner2.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${banner})`}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">WE ARE  <br /><span className='text-purple-600'>YOUR EVENT MANAGERS</span></h1>
      <p className="mb-5">Make Your event memorable and enjoy each moment with us.We provide the best service available in town</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;