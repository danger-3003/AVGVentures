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
    const [width, setWidht] = useState(0);

    const handleWidth = () => {
        setWidht(window.innerWidth);
    };
    useEffect(() => {
        if (location.hash === "#projects" && ProjectsSection.current) {
            ProjectsSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });
    useEffect(() => {
        window.addEventListener("resize", handleWidth);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("resize", handleWidth);
        };
    }, []);

    return (
        <>
            <div
                ref={ProjectsSection}
                className="relative flex items-center justify-center flex-col bg-secondary text-primary px-5 sm:px-7 md:px-10 py-20 md:pt-24 font-[poppins]"
            >
                <div
                    data-aos="fade-down"
                    className={`font-[Poppins] bg-[#e0e0e0] text-secondary w-[90vw] sm:w-max rounded-xl p-5 flex items-center justify-center flex-wrap sm:flex-row gap-2 sm:gap-5 absolute ${
                        width < 316 ? "-top-28" : "-top-20"
                    } sm:-top-16 shadow-lg shadow-[#00000038]`}
                >
                    <div className="flex items-center justify-center flex-col mx-1 sm:mx-5 text-center">
                        <p className="font-[Nunito] font-extrabold text-2xl sm:text-3xl md:text-4xl text-darkGreen">
                            19Yrs
                        </p>
                        <p className="text-sm font-medium text-black">
                            Years Of Experience
                        </p>
                    </div>
                    <div
                        className={`h-16 w-[0.1rem] bg-secondary ${
                            width < 415 ? "hidden" : "block"
                        }`}
                    ></div>
                    <div className="flex items-center justify-center flex-col mx-1 sm:mx-5 text-center">
                        <p className="font-[Nunito] font-extrabold text-2xl sm:text-3xl md:text-4xl text-darkGreen">
                            10K
                        </p>
                        <p className="text-sm font-medium text-black">
                            Happy Customers
                        </p>
                    </div>
                    <div
                        className={`h-16 w-[0.1rem] bg-secondary ${
                            width < 420 ? "hidden" : "block"
                        }`}
                    ></div>
                    <div className="flex items-center justify-center flex-col mx-1 sm:mx-5 text-center">
                        <p className="font-[Nunito] font-extrabold text-2xl sm:text-3xl md:text-4xl text-darkGreen">
                            50+
                        </p>
                        <p className="text-sm font-medium text-black">Our Team</p>
                    </div>
                </div>
                <p data-aos="fade-down" className="text-darkGreen text-center font-bold font-[Limelight] text-4xl mt-10 sm:mt-0 mb-14">
                    Our Projects  
                </p>
                <div className="w-[80vw] flex items-center justify-center relative z-[3]">
                    <Swiper />
                </div>
                <div>
                    <img src={LogoName} alt="Logo" className="w-40 absolute z-[3] bottom-5 right-5"/>
                </div>
                <div>
                    <div>
                        <img src={Pattern} alt="Pattern" className="hidden sm:block absolute top-0 left-0 rotate-180 w-60"/>
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
            </div>
        </>
    );
}

export default Projects;
