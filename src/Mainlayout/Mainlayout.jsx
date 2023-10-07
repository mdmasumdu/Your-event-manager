import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Footer from "../Pages/Footer/Footer";


const Mainlayout = () => {
    return (
        <div className="bg-slate-200 text-black container mx-auto ">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;