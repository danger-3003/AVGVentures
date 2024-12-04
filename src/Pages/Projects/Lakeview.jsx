import { useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Bg from "./assets/Hillcrest/Bg.jpg";
import Video from "./assets/Hillcrest/HillcrestVideo.mp4";
import RoadMap from "../../assets/RoadMap/Lakeview_RP.svg";
import LandMap from "../../assets/RoadMap/Lakeview_MP.svg";
import { faAngleRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";
import LakeviewBroucher from "../../assets/Brochure/Lake View.pdf";

import Image1 from "../../assets/Amenities/Image1.jpg";
import Image2 from "../../assets/Amenities/Image2.jpg";
import Image3 from "../../assets/Amenities/Image3.jpg";
import Image4 from "../../assets/Amenities/Image4.jpg";
import Image5 from "../../assets/Amenities/Image5.jpg";
import Image6 from "../../assets/Amenities/Image6.jpg";

import ContactForm from "./ContactForm";
import AOS from "aos";
import "aos/dist/aos.css";

function Hillcrest() {
    const location = useLocation();
    const amenitiesSection = useRef(null);
    const header=useRef(null);

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

  return (
    <div>
        <div ref={header} className='relative pt-20 px-5 lg:px-10 h-[20rem] sm:h-[30rem] flex items-center justify-center flex-col font-[Limelight] '
            style={{
                background: `linear-gradient(to bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.3)), url(${Bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <p className='bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-center text-3xl md:text-4xl lg:text-5xl tracking-[0.5rem] text-transparent'>Lake View</p>
            <Link to="/lakeview/#amenities" className="mt-10">
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
                    <p className="text-center w-full relative z-[3] text-[#edc967] group-hover:text-primary duration-500 font-semibold">
                        Explore
                    </p>
                    <div className="w-full bg-secondary h-10 rounded-full absolute z-[1] -left-[75%] group-hover:left-0 duration-500"></div>
                </div>
            </Link>
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
                <p className="font-[LimeLight] text-2xl sm:text-3xl md:text-3xl text-center md:w-min">Hillcrest Amenities</p>
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
        <div>
            <ContactForm />
        </div>
    </div>
  )
}

export default Hillcrest