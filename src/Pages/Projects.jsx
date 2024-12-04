import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import Swiper from "../Components/Swiper"
import LogoName from "../assets/LogoName.svg"
import Pattern from "../assets/Projects/Pattern.svg"
import "aos/dist/aos.css";

function Projects() {
    const ProjectsSection = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#projects" && ProjectsSection.current) {
            ProjectsSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });

    return (
        <>
            <div
                ref={ProjectsSection}
                className="relative flex items-center justify-center flex-col bg-primary text-secondary px-5 sm:px-7 md:px-10 py-20 md:pt-24 font-[poppins]"
            >
                <p data-aos="fade-down" className="bg-gradient-to-br relative z-[3] from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent text-center font-bold font-[Limelight] text-4xl mb-14">
                    Our Projects  
                </p>
                <div className="w-[80vw] relative z-[3] sm:w-80 md:w-[40rem] lg:w-[50rem]">
                    <Swiper />
                </div>
                <div>
                    <img src={LogoName} alt="Logo" className="w-40 absolute z-[3] bottom-5 right-5"/>
                </div>
                <div>
                    <img src={Pattern} alt="Pattern" className="absolute top-0 left-0 rotate-180 w-60"/>
                </div>
                <div>
                    <img src={Pattern} alt="Pattern" className="hidden sm:block absolute bottom-[3.7rem] rotate-90 -left-[3.75rem] w-60"/>
                </div>
                <div>
                    <img src={Pattern} alt="Pattern" className="absolute bottom-0 right-0 w-60"/>
                </div>
                <div>
                    <img src={Pattern} alt="Pattern" className="hidden sm:block absolute top-[3.7rem] -rotate-90 -right-[3.75rem] w-60"/>
                </div>
            </div>
        </>
    );
}

export default Projects;
