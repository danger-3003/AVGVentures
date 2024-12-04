import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LogoName.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,
    faEnvelope,
    faPhone,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function NavBar() {
    const [menu, setMenu] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [dropdown, setDropdown] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [going, setGoing] = useState(false);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        // Add event listener for scroll
        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMenu = () => {
        setMenu(!menu);
    };

    const handleDropdown=()=>{
        setDropdown(!dropdown);
        if(completed)
        {
            setCompleted(false);
        }
        else if(going)
        {
            setGoing(false);
        }
    }
    const handleCompleted=()=>{
        setCompleted(!completed);
        if(going)
        {
            setGoing(false);
        }
    }
    const handleGoing=()=>{
        setGoing(!going);
        if(completed)
        {
            setCompleted(false);
        }
    }

    return (
        <div
            className={`${
                scroll > 170
                    ? "bg-primary shadow-md shadow-[#00000033]"
                    : "bg-transparent"
            } fixed z-[5] w-full h-max py-1 flex items-center justify-center md:justify-between font-[Nunito] px-5 md:px-10 duration-300`}
        >
            <div>
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-14 sm:h-16 md:h-12 lg:h-16 py-1.5 pl-0 md:-pl-5"
                />
            </div>
            <div className="block md:hidden">
                <FontAwesomeIcon
                    icon={menu ? faTimes : faBars}
                    className="absolute text-[#f7ef8a] text-lg left-3 sm:left-5 top-5 sm:top-7 z-[10]"
                    onClick={handleMenu}
                />
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
                    to="/#why"
                    onClick={handleMenu}
                >
                    Why Us
                </Link>
                <div
                    className={`px-5 relative ${dropdown?"":"overflow-hidden "} z-[15] md:px-0 py-1 text-center w-full md:w-24 bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent`}
                >
                    <div className="flex items-center justify-center gap-2 hover:cursor-pointer" onClick={()=>{handleDropdown();}}>
                        <p>Projects</p>
                        <FontAwesomeIcon icon={faChevronDown} className={`text-[#edc967] text-sm ${dropdown?"rotate-180":"rotate-0"} duration-300`}/>
                    </div>
                    <ul className={`absolute z-[1] ${going || completed?"md:-left-10":"left-0"} left-0 ${dropdown?"top-12":"hidden -top-20"} duration-300 flex items-center justify-center flex-col w-full md:w-max px-2 ${scroll > 170 ? "bg-primary shadow-md shadow-[#00000033]": "bg-primary md:bg-transparent"}`}>
                        <div className="flex items-center justify-between w-full flex-row hover:cursor-pointer" onClick={handleCompleted}>
                            <li className={`bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] w-full to-[#edc967] bg-clip-text text-transparent py-2 px-2 ${scroll > 170 ? "border-b border-[#edc967]": "border-none"}`}>Completed</li>
                            <FontAwesomeIcon icon={faChevronDown} className={`text-[#edc967] text-sm ${!completed?"-rotate-90":"rotate-0"} duration-300`}/>
                        </div>
                        {completed &&
                            <ul className={`absolute z-[1] left-0 md:left-32 top-10 md:top-0 duration-300 flex items-center justify-center flex-col w-full md:w-max ${scroll > 170 ? "bg-primary shadow-md shadow-[#00000033]": "bg-primary md:bg-transparent"}`}>
                                <Link to="/shridharani">
                                    <li className={`bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] w-full to-[#edc967] bg-clip-text text-transparent py-2 hover:cursor-pointer px-2 ${scroll > 170 ? "border-b border-[#edc967]": "border-none"}`} onClick={()=>{handleDropdown();handleMenu();handleCompleted()}}>Shri Dharani</li>
                                </Link>
                            </ul>
                        }
                        <div className="flex items-center justify-between w-full flex-row hover:cursor-pointer" onClick={()=>{handleGoing();}}>
                            <li className="bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] w-full to-[#edc967] bg-clip-text text-transparent py-2 px-2">On Going</li>
                            <FontAwesomeIcon icon={faChevronDown} className={`text-[#edc967] text-sm ${!going?"-rotate-90":"rotate-0"} duration-300`}/>
                        </div>
                        {going &&
                            <ul className={`absolute z-[1] left-0 md:left-32 top-20 md:top-10 duration-300 flex items-center justify-center flex-col w-full md:w-max ${scroll > 170 ? "bg-primary shadow-md shadow-[#00000033]": "bg-primary md:bg-transparent"}`}>
                                <Link to="/hillcrest">
                                    <li className={`bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] w-full to-[#edc967] bg-clip-text text-transparent py-2 hover:cursor-pointer px-2 ${scroll > 170 ? "border-b border-[#edc967]": "border-none"}`} onClick={()=>{handleDropdown();handleMenu();handleGoing()}}>HillCrest</li>
                                </Link>
                                <Link to="/lakeview">
                                    <li className={`bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] w-full to-[#edc967] bg-clip-text text-transparent py-2 hover:cursor-pointer px-2`} onClick={()=>{handleDropdown();handleMenu();handleGoing()}}>Lake View</li>
                                </Link>
                            </ul>
                        }
                    </ul>
                </div>
                <Link
                    className="px-5 md:px-0 py-1 text-center w-full md:w-auto bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent"
                    to="/#gallery"
                    onClick={handleMenu}
                >
                    Gallery
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
                <a href="tel:9908040888" className="bg-secondary w-8 h-8 flex items-center justify-center rounded-full shadow-md shadow-[#00000057]">
                    <FontAwesomeIcon
                        icon={faPhone}
                        className="text-blue-700"
                    />
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=8247092491"
                    target="_blank" className="bg-secondary w-8 h-8 flex items-center justify-center rounded-full shadow-md shadow-[#00000057]">
                    <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="text-emerald-600 text-xl"
                    />
                </a>
                <a className="bg-secondary w-8 h-8 flex items-center justify-center rounded-full shadow-md shadow-[#00000057]">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-red-600"
                    />
                </a>
            </div>
        </div>
    );
}

export default NavBar;
