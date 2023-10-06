import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const {id}= useParams()

    const services = useLoaderData()
    
    const service = services.find(servicea => parseInt(id) ===servicea.id)

    const {name,image, price, full_description} =service

    return (
        <div className="bg-white">
            <h1 className="font-bold text-center text-3xl pt-5">{name}</h1>
             <div className="mt-5 mb-5 p-5">

           <p className="text-xl">{full_description}</p>
            
           </div>
            

          
            <div className="flex flex-col items-center justify-center pb-10">
            <img className="w-2/3" src={image} alt="" />
            <p className="text-center font-bold text-4xl">Price: $ {price}</p>
            <button className="btn mt-5 bg-purple-600  w-96">Book Now</button>
            </div>
            
          
            
        </div>
    );
};

export default Details;