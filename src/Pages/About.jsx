import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Line from "../assets/About/Line.svg";
import Person from "../assets/About/Person.jpg";
import Bg from "../assets/About/BgPattern.svg";
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
                <div
                    className={`font-[Poppins] bg-primary text-secondary w-[90vw] sm:w-max rounded-xl p-5 flex items-center justify-center flex-wrap sm:flex-row gap-2 sm:gap-5 absolute ${
                        width < 316 ? "-top-28" : "-top-20"
                    } sm:-top-16 shadow-lg shadow-[#00000038]`}
                >
                    <div className="flex items-center justify-center flex-col mx-1 sm:mx-5 text-center">
                        <p className="font-[Nunito] font-extrabold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] w-full to-[#edc967] bg-clip-text text-transparent">
                            19Yrs
                        </p>
                        <p className="text-sm font-extralight">
                            Years Of Experience
                        </p>
                    </div>
                    <div
                        className={`h-16 w-[0.1rem] bg-secondary ${
                            width < 415 ? "hidden" : "block"
                        }`}
                    ></div>
                    <div className="flex items-center justify-center flex-col mx-1 sm:mx-5 text-center">
                        <p className="font-[Nunito] font-extrabold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] w-full to-[#edc967] bg-clip-text text-transparent">
                            10K
                        </p>
                        <p className="text-sm font-extralight">
                            Happy Customers
                        </p>
                    </div>
                    <div
                        className={`h-16 w-[0.1rem] bg-secondary ${
                            width < 420 ? "hidden" : "block"
                        }`}
                    ></div>
                    <div className="flex items-center justify-center flex-col mx-1 sm:mx-5 text-center">
                        <p className="font-[Nunito] font-extrabold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] w-full to-[#edc967] bg-clip-text text-transparent">
                            50+
                        </p>
                        <p className="text-sm font-extralight">Our Team</p>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-wrap sm:flex-row gap-10 lg:gap-20 relative z-[3] text-text">
                    <div className={`${width<440?"w-[70vw] mt-10":"w-[10rem]"} md:w-[14rem] lg:w-[19rem] xl:w-[21rem]`}>
                        <img
                            src={Person}
                            alt=""
                            className="rounded-full my-5"
                            style={{ boxShadow: "0px 0px 20px #00000038"}}
                        />
                        <div className="flex items-center justify-center flex-col">
                            <p className="font-bold text-primary uppercase">User 1213</p>
                            <p className="font-light">Managing Director</p>
                        </div>
                    </div>
                    <div className={`flex items-center justify-center flex-col gap-5 ${width<440?"w-[90vw]":"w-[25rem]"} md:w-[30rem] lg:w-[35rem] xl:w-[38rem]`}>
                        <div className="text-primary flex items-center justify-center flex-col">
                            <div className="flex items-center justify-center flex-row">
                                <img src={Line} alt="Line" className="rotate-180 w-14 sm:w-20 md:w-32" />
                                <h1 className="text-2xl lg:text-3xl xl:text-4xl font-[Limelight] font-bold text-center mx-1 sm:mx-5">
                                    AVG Ventures
                                </h1>
                                <img
                                    src={Line}
                                    alt="Line"
                                    className="w-14 sm:w-20 md:w-32"
                                />
                            </div>
                            <p className="text-center text-sm sm:text-base">Building Dreams, Delivering Excellence</p>
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
        </>
    );
}

export default About;
