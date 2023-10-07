import { useLoaderData} from "react-router-dom";
import { getlocastorageitem } from "../Utilities";
import Ordera from "./Ordera";


const Order = () => {

    const services = useLoaderData()

   const savedids = getlocastorageitem();

 let ordered =[]
   for(const id of savedids){
    const service = services.find(servica=>servica.id ===id)
    ordered.push(service)
   }

   console.log(ordered)
    return (
       <div className="text-center bg-white ">
         <h1 className=" font-bold text-3xl bg-white pt-5">Your Orders here</h1>
       
     {
         ordered == '' ?  <h1 className="font-bold text-red-600 mt-10 text-5xl">You have not booked anything yet</h1> : ''   
     }
       
       
         <div className="min-h-screen bg-white grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 pt-10">
            {
                ordered.map(order=><Ordera key={order.id} order={order}></Ordera>)
            }
            
        </div>
       </div>
    );
};

export default Order;