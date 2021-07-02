import { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar"
import SideBar from "../components/Sidebar"
import Footer from '../components/Footer'
import Services from "../components/Services";
import Discover from "../components/InfoSection2";

const Home = () => {
    

    const [isOpen, setIsOpen] = useState(false)

    const toggle =() => {
        setIsOpen(!isOpen)
    }

    return ( <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <Services/>
        <Discover {...homeObjTwo} />
        <Footer/>
    </> );
}
 
export default Home;