import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Footer from "../Pages/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



const Mainlayout = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="bg-slate-200 text-black container mx-auto ">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;