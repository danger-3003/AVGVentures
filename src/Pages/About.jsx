import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Line from "../assets/About/Line.svg";
import Person from "../assets/About/Person.jpg";
import Bg from "../assets/About/BgPattern.svg";
import Vision from "../assets/Home/Vision.jpg";
import Mission from "../assets/Home/Mission.jpg";
import Logo from "../assets/LogoName.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    const location = useLocation();
    const aboutSection = useRef(null);
    const [width, setWidht] = useState(0);

    const handleWidth = () => {
        setWidht(window.innerWidth);
    };

    useEffect(() => {
        if (location.hash === "#about" && aboutSection.current) {
            aboutSection.current.scrollIntoView({ behavior: "smooth" });
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
                ref={aboutSection}
                className="relative py-20 md:pt-24 md:pb-20 bg-secondary font-[poppins] flex items-center justify-center flex-col w-full"
            >
                <div className="flex items-center justify-center flex-wrap sm:flex-row gap-10 lg:gap-20 relative overflow-hidden z-[3] text-text">
                    <div
                        data-aos="fade-right"
                        className={`${
                            width < 440 ? "w-[70vw] mt-10" : "w-[10rem]"
                        } md:w-[14rem] lg:w-[19rem] xl:w-[21rem]`}
                    >
                        <img
                            src={Person}
                            alt=""
                            className="rounded-full my-5"
                            style={{ boxShadow: "0px 0px 20px #00000038" }}
                        />
                        <div className="flex items-center justify-center flex-col">
                            <p className="font-bold text-darkGreen uppercase text-2xl text-center">
                                Mr. Avala Venkata Giribabu
                            </p>
                            <p className="font-light">Managing Director</p>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        className={`flex items-center justify-center flex-col gap-5 ${
                            width < 440 ? "w-[90vw]" : "w-[25rem]"
                        } md:w-[30rem] lg:w-[35rem] xl:w-[38rem]`}
                    >
                        <div className="text-darkGreen flex items-center justify-center flex-col">
                            <div className="flex items-center justify-center flex-row">
                                <img
                                    src={Line}
                                    alt="Line"
                                    className="rotate-180 w-14 sm:w-20 md:w-32"
                                />
                                <h1 className="text-2xl lg:text-3xl xl:text-4xl font-[Limelight] font-bold text-center mx-1 sm:mx-5">
                                    AVG Ventures
                                </h1>
                                <img
                                    src={Line}
                                    alt="Line"
                                    className="w-14 sm:w-20 md:w-32"
                                />
                            </div>
                            <p className="text-center text-sm sm:text-base">
                                Building Dreams, Delivering Excellence
                            </p>
                        </div>
                        <div className="text-sm lg:text-base text-center sm:text-left">
                            <p>
                                With 19 years of proven industry success, AVG
                                Ventures stands as a trusted partner in real
                                estate. Our dedication to quality, passion for
                                excellence, and unwavering commitment to
                                customer satisfaction drive us to consistently
                                deliver outstanding projects, creating lasting
                                value for our clients and their future.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 opacity-30">
                    <img src={Bg} alt="" />
                </div>
            </div>
            <div className="flex items-center justify-center my-10">
                <h1 className=" w-[80vw] xl:w-[50rem] font-[poppins] text-lg">
                    <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="text-[#d29e2a] text-4xl"
                    />
                    In the heart of India's dynamic real estate landscape stands a
                    brand with a unique vision - a vision rooted in the belief that
                    every man should own a land. Welcome to <span className="font-semibold text-primary">AVG Ventures</span>, where we see beyond mere properties and developments; we
                    see the foundations of dreams, legacies, and the very essence of
                    wealth.
                    <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="text-[#d29e2a] text-4xl"
                    />
                </h1>
            </div>
            <div className="bg-[#f1f1f1] relative overflow-hidden flex items-center justify-center flex-col px-5 sm:px-7 md:px-10 py-16 text-secondary font-[poppins]">
                <div className="flex items-center md:items-start justify-center flex-col gap-5 md:gap-10">
                    <div className="flex items-center justify-center md:justify-between flex-col md:flex-row xl:w-[60rem] gap-5">
                        <p
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            className="font-[Limelight] text-darkGreen text-center md:text-left text-2xl md:text-3xl lg:text-4xl w-min"
                        >
                            Our&nbsp;Mission & Vision
                        </p>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            className="flex items-center justify-center flex-col sm:flex-row md:w-[30rem] lg:w-[35rem] mt-5 md:mt-0 gap-5"
                        >
                            <img
                                src={Vision}
                                alt=""
                                className="h-32 sm:h-40 w-32 sm:w-40 rounded-full"
                            />
                            <div className="flex items-center justify-center flex-col w-[90vw] sm:w-auto">
                                <p className="text-primary font-bold text-xl mb-3">
                                    VISION
                                </p>
                                <p className="text-sm sm:text-base text-center text-darkGreen sm:text-left">
                                    AVG Ventures aims to be the most trusted and
                                    respected real estate company in the region,
                                    known for our commitment to quality,
                                    integrity and customer satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="flex items-center justify-center flex-col sm:flex-row-reverse mt-10 md:w-[30rem] lg:w-[35rem] gap-5"
                    >
                        <img
                            src={Mission}
                            alt=""
                            className="h-32 sm:h-40 w-32 sm:w-40 rounded-full"
                        />
                        <div className="flex items-center justify-center flex-col w-[90vw] sm:w-auto">
                            <p className="text-primary font-bold text-xl mb-3">
                                MISSION
                            </p>
                            <p className="text-sm sm:text-base text-center text-darkGreen sm:text-left">
                                At AVG Ventures we are committed to providing
                                our customers with exceptional service, quality
                                projects, and unparalleled value, while
                                maintaining the highest standards of integrity &
                                professionalism
                            </p>
                        </div>
                    </div>
                </div>
                {/* <div className="hidden md:flex items-end absolute right-10 bottom-20 lg:right-10 opacity-50">
                    <img src={Logo} alt="" className="w-40 lg:w-60" />
                </div> */}
            </div>
        </>
    );
}

export default About;
