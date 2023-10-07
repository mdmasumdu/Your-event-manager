import { useLoaderData } from "react-router-dom";
import Banner from "./Bannner/Banner";
import Services from "./Services/Services";
import HappyClients from "./HappyClients/HappyClients";

import Teams from "./Teams/Teams";



const Home = () => {

    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <Banner></Banner>
           <div className="bg-white p-5">
           <h1 className="text-4xl font-bold text-center mt-10 mb-5">OUR SERVICES</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
                {
                    services.map(service =><Services key={service.id} service={service}></Services>)
                }
            </div>
           </div>
          <Teams></Teams>
           <HappyClients></HappyClients>
        </div>
    );
};

export default Home;