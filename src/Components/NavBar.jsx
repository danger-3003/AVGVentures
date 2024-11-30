import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function NavBar() {
    const [menu, setMenu] = useState(false);
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    console.log(scroll)

    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className={`${scroll>170?"bg-primary shadow-md shadow-[#00000033]":"bg-transparent"} fixed z-[5] w-full h-max py-1 flex items-center justify-center md:justify-between font-[Nunito] px-5 md:px-10 duration-300`}>
            <div>
                <img src={Logo} alt="Logo" className="h-16 py-1.5 pl-0 md:-pl-5"/>
            </div>
            <div className="block md:hidden">
                <FontAwesomeIcon icon={menu?faTimes:faBars} className="absolute text-[#f7ef8a] text-lg left-5 top-7 z-[10]" onClick={handleMenu}/>
            </div>
            <div
                className={`flex items-start md:items-center justify-center flex-col md:flex-row font-bold gap-5 w-max h-screen bg-primary px-10 md:px-0 ${
                    !menu ? "-left-60 md:left-0" : "left-0"
                } md:bg-transparent transition-all duration-500 top-0 md:right-0 md:h-auto shadow-xl md:shadow-transparent shadow-[#00000034] z-[6] absolute md:relative`}
            >
                <Link
                    className="px-5 md:px-0 py-1 text-center w-full md:w-auto bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent"
                    to="/#home"
                    onClick={handleMenu}
                >
                    Home
                </Link>
                <Link
                    className="px-5 md:px-0 py-1 text-center w-full md:w-auto bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent"
                    to="/#about"
                    onClick={handleMenu}
                >
                    About
                </Link>
                <Link
                    className="px-5 md:px-0 py-1 text-center w-full md:w-auto bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent"
                    to="/#amenities"
                    onClick={handleMenu}
                >
                    Amenities
                </Link>
                <Link
                    className="px-5 md:px-0 py-1 text-center w-full md:w-auto bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent"
                    to="/#location"
                    onClick={handleMenu}
                >
                    Location
                </Link>
                <Link
                    className="px-5 md:px-0 py-1 text-center w-full md:w-auto bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent"
                    to="/#contact"
                    onClick={handleMenu}
                >
                    Contact Us
                </Link>
            </div>
            <div className="flex items-center justify-center flex-col fixed left-0 top-[40vh] gap-3 z-[10]">
                <a className="bg-secondary w-8 h-8 flex items-center justify-center rounded-full shadow-md shadow-[#00000057]">
                    <FontAwesomeIcon icon={faPhone} className="text-blue-700"/>
                </a>
                <a className="bg-secondary w-8 h-8 flex items-center justify-center rounded-full shadow-md shadow-[#00000057]">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-emerald-600 text-xl"/>
                </a>
                <a className="bg-secondary w-8 h-8 flex items-center justify-center rounded-full shadow-md shadow-[#00000057]">
                    <FontAwesomeIcon icon={faEnvelope} className="text-red-600"/>
                </a>
            </div>
        </div>
    );
}

export default NavBar;
