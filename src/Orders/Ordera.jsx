/* eslint-disable react/prop-types */


const Ordera = ({order}) => {
    const {image,price,short_description,name} =order
    return (
        <div>
        
        <div className="card bg-amber-200 w-96 shadow-xl">
        
<figure><img className=" h-72" src={image} alt="Shoes" /></figure>
<div className="card-body">
 <h2 className="fontt-bold">{name}</h2>
 <p className="h-20">{short_description}</p>
 <div className="badge badge-error h-6" > <p className="text-center">Ordered</p></div>
 <h1>Price: $ {price}</h1>
</div>
</div>
         
     </div>
    );
};

export default Ordera;