import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet } from "react-router";
import NavbarSection from '../components/CarouselSection/NavbarSection'
const MainLayout = () => {
    return (
        <>
            {/* <Navbar/> */}
            <NavbarSection/>
            <Outlet/>
            {/* <Footer/> */}
        </>
    );
};

export default MainLayout;