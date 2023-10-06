/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";


const Services = ({service}) => {

    const {name, id,image, price, short_description}= service
    const navigate = useNavigate()

    const bookhandler =()=>{
        navigate(`details/${id}`)
    }
  
    return (
        <div>
           <div className="card bg-slate-400 shadow-xl flex flex-col">
  <figure><img className="w-full h-72" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      
    </h2>
    
    <p className="h-20">{short_description}</p>
    <div className="badge badge-secondary h-6"> Price: $ {price}</div>
   <button className="btn mt-5 bg-purple-600 " onClick={bookhandler}>Details</button>
  </div>
</div>
            
        </div>
    );
};

export default Services;