
import { useEffect, useState } from "react";
import Client from "./Client";


const HappyClients = () => {
    const [clients,setClients] = useState([]);

    useEffect(()=>{
   fetch('Client.json')
   .then(res=> res.json())
   .then(data=>setClients(data))

    },[])

    console.log(clients)
    return (
        <div className="bg-white">
            <h1 className="text-center font-bold text-4xl mb-5">Happy Clients</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                
            {
                clients.map(client=><Client key={client.id} client={client}></Client>)
            }
            </div>
            
        </div>
    );
};

export default HappyClients;