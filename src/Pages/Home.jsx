import { useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Bg from "../assets/Home/Background.webp";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    const location = useLocation();
    const homeSection = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (location.hash === "#home" && homeSection.current) {
            homeSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });

    const handleNavigate = () => {
        navigate("/#projects");
    };

    return (
        <div
            ref={homeSection}
            className="w-full h-max px-5 sm:px-7 md:px-10 py-10 pt-20 md:pt-24 relative font-[Poppins] flex items-center justify-center"
            style={{
                background: `linear-gradient(to bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.3)), url(${Bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="text-secondary flex items-center justify-center flex-col py-32">
                <p data-aos="fade-up" className="font-extrabold font-[Limelight] tracking-widest sm:tracking-[0.2rem] text-3xl sm:text-4xl md:text-5xl mb-2 text-center">
                    Unbelievable Growth for your Family
                </p>
                <p data-aos="fade-up" className="font-[Nunito] font-extralight italic text-lg sm:text-xl md:text-2xl text-center">
                    A Future with endless possibilities
                </p>
                <p data-aos="fade-up" className="mt-10 mb-3">
                    At AVG Ventures we committed to providing our customers with
                    exceptional Service
                </p>
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
                    <p className="text-center w-full relative z-[3] group-hover:text-primary duration-500 font-semibold">
                        Explore
                    </p>
                    <div className="w-full bg-secondary h-10 rounded-full absolute z-[1] -left-[75%] group-hover:left-0 duration-500"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
