import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Bg from "../assets/Home/Why.jpg";
import one from "../assets/Home/one.svg";
import two from "../assets/Home/two.svg";
import three from "../assets/Home/three.svg";
import four from "../assets/Home/four.svg";
import five from "../assets/Home/five.svg";
import six from "../assets/Home/six.svg";
import Vision from "../assets/Home/Vision.jpg";
import Mission from "../assets/Home/Mission.jpg";
import Logo from "../assets/LogoName.svg"
import AOS from "aos";
import "aos/dist/aos.css";

function Why() {
    const whySection = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#why" && whySection.current) {
            whySection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        AOS.init({ duration: 500 });
        AOS.refresh();
    });

    return (
        <>
            <div
                ref={whySection}
                className="flex items-center justify-center flex-col relative overflow-hidden px-5 sm:px-7 md:px-10 py-20 md:pt-24 font-[poppins]"
                style={{
                    background: `linear-gradient(to bottom,rgba(0,35,24,1),rgba(0,35,24,0.8)),url(${Bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex items-center justify-center flex-col">
                    <p data-aos="fade-down" className="bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent font-bold font-[Limelight] text-4xl mb-14">
                        Why Us ?
                    </p>
                    <div className="flex items-start justify-center flex-wrap gap-5 lg:w-[50rem]">
                        <div data-aos="fade-left" data-aos-delay="0" className="flex items-center justify-center text-center flex-col w-[12rem] lg:w-[15rem] mb-5 mb:mb-10">
                            <p className="bg-gradient-to-br from-secondary via-secondary to-secondary bg-clip-text text-transparent font-light font-[Limelight] text-2xl md:text-3xl">
                                01
                            </p>
                            <img
                                src={one}
                                alt="Image1"
                                className="mt-5 md:mt-10 h-10"
                            />
                            <div className="text-center text-secondary font-extralight mt-2 text-sm sm:text-base">
                                Low Cost & Economy Price
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="100" className="flex items-center justify-center text-center flex-col w-[12rem] lg:w-[15rem] mb-5 mb:mb-10">
                            <p className="bg-gradient-to-br from-secondary via-secondary to-secondary bg-clip-text text-transparent font-light font-[Limelight] text-2xl md:text-3xl">
                                02
                            </p>
                            <img
                                src={two}
                                alt="Image2"
                                className="mt-5 md:mt-10 h-10"
                            />
                            <div className="text-center text-secondary font-extralight mt-2 text-sm sm:text-base">
                                Crystal Clear Property
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="200" className="flex items-center justify-center text-center flex-col w-[12rem] lg:w-[15rem] mb-5 mb:mb-10">
                            <p className="bg-gradient-to-br from-secondary via-secondary to-secondary bg-clip-text text-transparent font-light font-[Limelight] text-2xl md:text-3xl">
                                03
                            </p>
                            <img
                                src={three}
                                alt="Image3"
                                className="mt-5 md:mt-10 h-10"
                            />
                            <div className="text-center text-secondary font-extralight mt-2 text-sm sm:text-base">
                                Customer Service and Satisfaction
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="300" className="flex items-center justify-center text-center flex-col w-[12rem] lg:w-[15rem] mb-5 mb:mb-10">
                            <p className="bg-gradient-to-br from-secondary via-secondary to-secondary bg-clip-text text-transparent font-light font-[Limelight] text-2xl md:text-3xl">
                                04
                            </p>
                            <img
                                src={four}
                                alt="Image4"
                                className="mt-5 md:mt-10 h-10"
                            />
                            <div className="text-center text-secondary font-extralight mt-2 text-sm sm:text-base">
                                Spot Registration and Clear Title
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="400" className="flex items-center justify-center text-center flex-col w-[12rem] lg:w-[15rem] mb-5 mb:mb-10">
                            <p className="bg-gradient-to-br from-secondary via-secondary to-secondary bg-clip-text text-transparent font-light font-[Limelight] text-2xl md:text-3xl">
                                05
                            </p>
                            <img
                                src={five}
                                alt="Image5"
                                className="mt-5 md:mt-10 h-10"
                            />
                            <div className="text-center text-secondary font-extralight mt-2 text-sm sm:text-base">
                                Well Developed Projects
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="500" className="flex items-center justify-center text-center flex-col w-[12rem] lg:w-[15rem] mb-5 mb:mb-10">
                            <p className="bg-gradient-to-br from-secondary via-secondary to-secondary bg-clip-text text-transparent font-light font-[Limelight] text-2xl md:text-3xl">
                                06
                            </p>
                            <img
                                src={six}
                                alt="Image6"
                                className="mt-5 md:mt-10 h-10"
                            />
                            <div className="text-center text-secondary font-extralight mt-2 text-sm sm:text-base">
                                Choosing Heights with High Growth Potential
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary relative overflow-hidden flex items-center justify-center flex-col px-5 sm:px-7 md:px-10 py-16 text-text font-[poppins]">
                <div className="flex items-center md:items-start justify-center flex-col gap-5 md:gap-10">
                    <div className="flex items-center justify-center md:justify-between flex-col md:flex-row xl:w-[60rem] gap-5">
                        <p data-aos="fade-up" data-aos-duration="1000" className="font-[Limelight] text-primary text-center md:text-left text-2xl md:text-3xl lg:text-4xl w-min">
                            Our&nbsp;Mission & Vision
                        </p>
                        <div data-aos="fade-left" data-aos-duration="1000" className="flex items-center justify-center flex-col sm:flex-row md:w-[30rem] lg:w-[35rem] mt-5 md:mt-0 gap-5">
                            <img
                                src={Vision}
                                alt=""
                                className="h-32 sm:h-40 w-32 sm:w-40 rounded-full"
                            />
                            <div className="flex items-center justify-center flex-col w-[90vw] sm:w-auto">
                                <p className="text-primary font-bold text-xl mb-3">
                                    VISION
                                </p>
                                <p className="text-sm sm:text-base text-center sm:text-left">
                                    AVG Ventures aims to be the most trusted and
                                    respected real estate company in the region,
                                    known for our commitment to quality,
                                    integrity and customer satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1000" className="flex items-center justify-center flex-col sm:flex-row-reverse mt-10 md:w-[30rem] lg:w-[35rem] gap-5">
                        <img
                            src={Mission}
                            alt=""
                            className="h-32 sm:h-40 w-32 sm:w-40 rounded-full"
                        />
                        <div className="flex items-center justify-center flex-col w-[90vw] sm:w-auto">
                            <p className="text-primary font-bold text-xl mb-3">
                                MISSION
                            </p>
                            <p className="text-sm sm:text-base text-center sm:text-left">
                                At AVG Ventures we are committed to providing
                                our customers with exceptional service, quality
                                projects, and unparalleled value, while
                                maintaining the highest standards of integrity &
                                professionalism
                            </p>
                        </div>
                        <div className="hidden md:flex items-end absolute right-10 bottom-10 lg:bottom-auto lg:right-20 opacity-50">
                            <img src={Logo} alt="" className="w-40 lg:w-60"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Why;
