import { useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Bg from "../../assets/Projects/assets/Bg.jpg";
import Video from "../../assets/Projects/assets/HillcrestVideo.mp4";
import RoadMap from "../../assets/RoadMap/Hillcrest_RP.svg";
import LandMap from "../../assets/RoadMap/Hillcrest_LP.svg";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";

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
    const navigate = useNavigate();

    useEffect(() => {
        if (location.hash === "#amenities" && amenitiesSection.current) {
            amenitiesSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        if (location.pathname === "/hillcrest") {
            header.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });

    const handleNavigate = () => {
        navigate("/hillcrest/#amenities");
    };

  return (
    <div>
        <div ref={header} className='pt-20 px-5 lg:px-10 h-[20rem] sm:h-[30rem] flex items-center justify-center flex-col font-[Limelight] '
            style={{
                background: `linear-gradient(to bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.3)), url(${Bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <p className='bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-center text-3xl md:text-4xl lg:text-5xl tracking-[0.5rem] text-transparent'>HillCrest Valley</p>
            <Link to="/hillcrest/#amenities" className="mt-10">
                <div
                    data-aos="fade-left"
                    className="group relative w-40 h-10 rounded-full flex items-center hover:cursor-pointer overflow-hidden font-[Nunito]"
                    onClick={handleNavigate}
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
        </div>
        <div ref={amenitiesSection} className='bg-secondary w-full flex items-center justify-center'>
            <div className="w-full flex items-center justify-center">
                <video src={Video} autoPlay={true} loop={true} muted={true} controls type="video/mp4" className="w-[100%] sm:w-[90%] md:w-[80%]"></video>
            </div>
        </div>
        <div className='bg-primary w-full flex items-center justify-center flex-col py-20 gap-10 sm:gap-20 px-10'>
            <div className="flex items-start justify-center sm:justify-center flex-wrap sm:flex-row w-[85vw] sm:w-[30rem] md:w-[40rem] lg:w-[60rem] gap-10 lg:gap-20">
                <img src={RoadMap} alt="RoadMap" className="w-full sm:w-48 md:w-[16rem] lg:w-[18rem] xl:w-[20rem]" />
                <div className="flex items-start justify-center flex-col">
                    <img src={LandMap} alt="LandMap" className="w-full sm:w-52 md:w-[20rem] lg:w-[28rem]" />
                    <div className="flex items-start justify-center flex-col pl-5">
                        <p className="bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-center text-transparent text-xl my-2 -ml-5 md:text-2xl font-bold">Location Highlights</p>
                        <ul className="text-secondary  font-extralight list-disc text-sm">
                            <li>Near to Raiwada Reservoir</li>
                            <li>Nearby Devarapalli Water Falls</li>
                            <li>Nearby <strong>Punyagiri Temple</strong></li>
                            <li>Very Near to Araku National Highway</li>
                            <li>Near to Green Field Highway</li>
                            <li>Scenic View of Surrounding Hills</li>
                            <li>Covers 3 National Highways</li>
                        </ul>
                    </div>
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