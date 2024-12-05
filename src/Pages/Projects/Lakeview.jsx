import { useRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Bg from "./assets/Hillcrest/Bg.jpg";
import Video from "./assets/Hillcrest/HillcrestVideo.mp4";
import RoadMap from "../../assets/RoadMap/Lakeview_RP.svg";
import LandMap from "../../assets/RoadMap/Lakeview_MP.svg";
import {
    faAngleRight,
    faArrowDown,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";
import LakeviewBroucher from "../../assets/Brochure/Lake View.pdf";

import Image1 from "../../assets/Amenities/Image1.jpg";
import Image2 from "../../assets/Amenities/Image2.jpg";
import Image3 from "../../assets/Amenities/Image3.jpg";
import Image4 from "../../assets/Amenities/Image4.jpg";
import Image5 from "../../assets/Amenities/Image5.jpg";
import Image6 from "../../assets/Amenities/Image6.jpg";
import Offer from "../../assets/About/HillOffer.svg";
import TripleOffer from "../../assets/About/TripleOffer.svg";

import ContactForm from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

function Hillcrest() {
    const location = useLocation();
    const amenitiesSection = useRef(null);
    const header=useRef(null);
    const [popUp, setPopUp] = useState(true);

    useEffect(() => {
        if (location.hash === "#amenities" && amenitiesSection.current) {
            amenitiesSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        if (location.pathname === "/lakeview") {
            header.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });
    const handlePopUp = () => {
        setPopUp(false);
        if (location.pathname === "/hillcrest") {
            header.current.scrollIntoView({ behavior: "smooth" });
        }
    };

  return (
    <div>
        <Helmet>
            <title>LakeView</title>
        </Helmet>
        {popUp && (
            <div className="bg-[#000000f1] text-secondary h-full w-full flex items-center justify-center flex-col fixed z-20 font-[Poppins]">
                <div className="flex items-center justify-center flex-col w-[90vw] sm:w-[23rem] lg:w-[25rem]">
                    <p className="font-bold text-center text-2xl md:text-3xl lg:text-4xl animate-pulse bg-gradient-to-br from-[#e7b53f] via-[#f7ef8a] to-[#edc967] text-transparent bg-clip-text">
                        Limited Time Offer!
                    </p>
                    <div className="flex items-center justify-center flex-wrap sm:flex-row gap-5">
                        <img
                            src={Offer}
                            alt="offerPrice"
                            className="mt-7 pb-4 h-36 md:h-52"
                        />
                        <img
                            src={TripleOffer}
                            alt="tripleOffer"
                            className="h-28 md:h-36"
                        />
                    </div>
                    <p className="text-center font-extralight text-sm sm:text-lg md:text-xl mb-5">
                        🎁 Buy your dream land today and receive free{" "}
                        <span className="font-bold uppercase text-[#e7b53f]">
                            gold
                        </span>{" "}
                        and{" "}
                        <span className="font-bold uppercase text-[#e7b53f]">
                            silver
                        </span>{" "}
                        coins as a bonus!
                    </p>
                    <div className="mt-7 flex items-center justify-center flex-col">
                        <p className="text-center text-base sm:text-lg font-light mb-3">
                            Hurry! Offers valid for a limited period only.
                        </p>
                        <p className="text-center mb-3 text-sm sm:text-lg">
                            👇 Grab your dream property now!
                        </p>
                        <a
                            href="tel:+123456789"
                            className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-bold rounded-full group"
                        >
                            <span className="w-32 h-20 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                                Call Now 📞
                            </span>
                            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                        </a>
                    </div>
                    <div
                        className="hover:cursor-pointer"
                        onClick={handlePopUp}
                    >
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="text-white text-xl sm:text-2xl md:text-3xl absolute top-5 right-5 md:top-10 md:right-10"
                        />
                    </div>
                </div>
            </div>
        )}
        <div ref={header} className='relative pt-24 sm:pt-20 pb-10 px-5 md:px-7 lg:px-10 flex items-center justify-center flex-col sm:flex-row gap-10'
            style={{
                background: `linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.5)), url(${Bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex items-center sm:items-start justify-center flex-col font-[Poppins] sm:w-[17rem] md:w-[23rem] lg:w-[30rem] -mr-5">
                <p className='bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-center sm:text-left text-3xl md:text-4xl lg:text-5xl font-[Limelight] tracking-[0.5rem] text-transparent'>Lake View</p>
                <p className="text-secondary uppercase text-center sm:text-left text-xl md:text-2xl lg:text-3xl tracking-tight sm:tracking-tighter font-[Oswald] mt-3">The Ultimate Airport Luxury Destination</p>
                <Link to="/lakeview/#amenities" className="mt-7 sm:mt-10">
                    <div
                        data-aos="fade-left"
                        className="group relative w-40 h-10 rounded-full flex items-center hover:cursor-pointer overflow-hidden font-[Nunito]"
                    >
                        <div className="w-40 absolute z-[2] flex items-center left-[10%] group-hover:left-[85%] duration-500 rounded-full">
                            <FontAwesomeIcon
                                icon={faAngleRight}
                                className="text-primary"
                            />
                        </div>
                        <p className="text-center w-full relative z-[3] text-secondary group-hover:text-primary duration-500 font-semibold">
                            Explore
                        </p>
                        <div className="w-full bg-secondary h-10 rounded-full absolute z-[1] -left-[75%] group-hover:left-0 duration-500"></div>
                    </div>
                </Link>
            </div>
            <div className="sm:-mr-10">
                <ContactForm />
            </div>
            <a href={LakeviewBroucher} target="_blank" className="font-[poppins]">
                <div className="group bg-primary hover:bg-secondary duration-300 absolute bottom-5 right-5 h-8 px-3 gap-2 flex items-center justify-center rounded-full animate-bounce" style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.5"}}>
                    <p className="text-secondary group-hover:text-primary font-semibold text-sm">Brochure</p>
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        className="text-secondary group-hover:text-primary"
                    />
                </div>
            </a>
        </div>
        <div ref={amenitiesSection} className='bg-secondary py-20 w-full flex items-center justify-center'>
            <div className="w-full flex items-center justify-center">
                <video src={Video} autoPlay={true} loop={true} muted={true} controls type="video/mp4" className="w-[100%] sm:w-[90%] md:w-[80%]"></video>
            </div>
        </div>
        <div className='bg-primary w-full flex items-center justify-center flex-col py-20 gap-10 sm:gap-20 px-10'>
            <div className="flex items-center justify-center sm:justify-center flex-col sm:flex-row w-[85vw] sm:w-[30rem] md:w-[40rem] lg:w-[60rem] gap-10 lg:gap-14">
                <img src={LandMap} alt="LandMap" className="w-full sm:w-52 md:w-[17rem] lg:w-[20rem] xl:w-[28rem]" />
                <img src={RoadMap} alt="RoadMap" className="w-full sm:w-[15rem] md:w-[18rem] lg:w-[22rem] xl:w-[28rem]" />
            </div>
            <div className="flex items-center justify-center flex-col sm:pl-5 font-[poppins]">
                <p className="bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-center text-transparent text-xl my-2 -ml-5 md:text-2xl font-bold">Location Highlights</p>
                <div className="text-secondary font-extralight flex items-center justify-center flex-wrap text-sm lg:w-[60rem]">
                    <div className={`bg-secondary text-primary rounded-full py-2 px-3 m-3 ${window.innerWidth<380?"w-[90vw] mx-0":"w-max"} sm:w-80 md:w-[23rem] text-center`}>3 min drive from Maharaja Eng. College</div>
                    <div className={`bg-secondary text-primary rounded-full py-2 px-3 m-3 ${window.innerWidth<380?"w-[90vw] mx-0":"w-max"} sm:w-80 md:w-[23rem] text-center`}>3 min drive from Vizianagaram city</div>
                    <div className={`bg-secondary text-primary rounded-full py-2 px-3 m-3 ${window.innerWidth<380?"w-[90vw] mx-0":"w-max"} sm:w-80 md:w-[23rem] text-center`}>5 min drive from Chennai - Kolkata Highway</div>
                    <div className={`bg-secondary text-primary rounded-full py-2 px-3 m-3 ${window.innerWidth<380?"w-[90vw] mx-0":"w-max"} sm:w-80 md:w-[23rem] text-center`}>7 min drive from Lendi Eng. College</div>
                    <div className={`bg-secondary text-primary rounded-full py-2 px-3 m-3 ${window.innerWidth<380?"w-[90vw] mx-0":"w-max"} sm:w-80 md:w-[23rem] text-center`}>10 min drive from Bhogapuram Airport</div>
                    <div className={`bg-secondary text-primary rounded-full py-2 px-3 m-3 ${window.innerWidth<380?"w-[90vw] mx-0":"w-max"} sm:w-80 md:w-[23rem] text-center`}>10 min drive from Rama Narayana Temple</div>
                </div>
            </div>
        </div>
        <div className="bg-secondary w-full flex items-center justify-center py-20 px-5 md:px-10">
            <div className="w-full lg:w-[50rem] xl:w-[60rem] flex items-center justify-center flex-col sm:flex-row gap-10 md:gap-20">
                <p className="font-[LimeLight] text-2xl sm:text-3xl md:text-3xl text-center md:w-min">LakeView Amenities</p>
                <Marquee className="" pauseOnHover gradientColor="#fff2e4" gradient gradientWidth={40}>
                    <div className="mx-2 md:mx-5 rounded-t-full relative overflow-hidden group">
                        <div className="bg-gradient-to-b from-[#00000000] to-[#000000b0] px-3 md:px-5 absolute top-full group-hover:top-0 duration-500 flex items-center justify-center rounded-md h-full w-full">
                            <p className="text-secondary text-center">Avenue Plantation</p>
                        </div>
                        <img src={Image1} alt="" className="h-40 md:h-52 rounded-t-full"/>
                    </div>
                    <div className="mx-2 md:mx-5 rounded-t-full relative overflow-hidden group">
                        <div className="bg-gradient-to-b from-[#00000000] to-[#000000b0] px-3 md:px-5 absolute top-full group-hover:top-0 duration-500 flex items-center justify-center rounded-md h-full w-full">
                            <p className="text-secondary text-center">Children Park</p>
                        </div>
                        <img src={Image2} alt="" className="h-40 md:h-52 rounded-t-full"/>
                    </div>
                    <div className="mx-2 md:mx-5 rounded-t-full relative overflow-hidden group">
                        <div className="bg-gradient-to-b from-[#00000000] to-[#000000b0] px-3 md:px-5 absolute top-full group-hover:top-0 duration-500 flex items-center justify-center rounded-md h-full w-full">
                            <p className="text-secondary text-center">Entrance Arch</p>
                        </div>
                        <img src={Image3} alt="" className="h-40 md:h-52 rounded-t-full"/>
                    </div>
                    <div className="mx-2 md:mx-5 rounded-t-full relative overflow-hidden group">
                        <div className="bg-gradient-to-b from-[#00000000] to-[#000000b0] px-3 md:px-5 absolute top-full group-hover:top-0 duration-500 flex items-center justify-center rounded-md h-full w-full">
                            <p className="text-secondary text-center">100% Vaastu</p>
                        </div>
                        <img src={Image4} alt="" className="h-40 md:h-52 rounded-t-full"/>
                    </div>
                    <div className="mx-2 md:mx-5 rounded-t-full relative overflow-hidden group">
                        <div className="bg-gradient-to-b from-[#00000000] to-[#000000b0] px-3 md:px-5 absolute top-full group-hover:top-0 duration-500 flex items-center justify-center rounded-md h-full w-full">
                            <p className="text-secondary text-center">A/c Guest House</p>
                        </div>
                        <img src={Image5} alt="" className="h-40 md:h-52 rounded-t-full"/>
                    </div>
                    <div className="mx-2 md:mx-5 rounded-t-full relative overflow-hidden group">
                        <div className="bg-gradient-to-b from-[#00000000] to-[#000000b0] px-3 md:px-5 absolute top-full group-hover:top-0 duration-500 flex items-center justify-center rounded-md h-full w-full">
                            <p className="text-secondary text-center">Model House</p>
                        </div>
                        <img src={Image6} alt="" className="h-40 md:h-52 rounded-t-full"/>
                    </div>
                </Marquee>
            </div>
        </div>
    </div>
  )
}

export default Hillcrest