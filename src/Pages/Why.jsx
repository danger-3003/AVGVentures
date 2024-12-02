import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Bg from "../assets/Home/Why.jpg";
import one from "../assets/Home/one.svg"
import two from "../assets/Home/two.svg"
import three from "../assets/Home/three.svg"
import four from "../assets/Home/four.svg"
import five from "../assets/Home/five.svg"
import six from "../assets/Home/six.svg"
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
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });

    return (
        <>
            <div
                ref={whySection}
                className="flex items-center justify-center flex-col px-5 sm:px-7 md:px-10 py-20 md:pt-24 font-[poppins]"
                style={{background:`linear-gradient(to bottom,rgba(0,35,24,1),rgba(0,35,24,0.8)),url(${Bg})`,backgroundSize:"cover",backgroundPosition:"center"}}
            >
                <div className="flex items-center justify-center flex-col">
                    <p className="bg-gradient-to-br from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent font-bold font-[Limelight] text-4xl mb-14">Why Us ?</p>
                    <div className="flex items-start justify-center flex-wrap gap-5 lg:w-[50rem]">
                        <div className="flex items-center justify-center text-center flex-col w-[12rem] lg:w-[15rem] mb-5 mb:mb-10">
                            <p className="bg-gradient-to-br from-secondary via-secondary to-secondary bg-clip-text text-transparent font-light font-[Limelight] text-2xl md:text-3xl">01</p>
                            <img src={one} alt="Image1" className="mt-5 md:mt-10 h-10"/>
                            <div className="text-center text-secondary font-extralight mt-2 text-sm sm:text-base">
                                Low Cost & Economy Price
                            </div>
                        </div>
                        <div className="flex items-center justify-center text-center flex-col w-[12rem] lg:w-[15rem] mb-5 mb:mb-10">
                            <p className="bg-gradient-to-br from-secondary via-secondary to-secondary bg-clip-text text-transparent font-light font-[Limelight] text-2xl md:text-3xl">02</p>
                            <img src={two} alt="Image2" className="mt-5 md:mt-10 h-10"/>
                            <div className="text-center text-secondary font-extralight mt-2 text-sm sm:text-base">
                                Crystal Clear Property
                            </div>
                        </div>
                        <div className="flex items-center justify-center text-center flex-col w-[12rem] lg:w-[15rem] mb-5 mb:mb-10">
                            <p className="bg-gradient-to-br from-secondary via-secondary to-secondary bg-clip-text text-transparent font-light font-[Limelight] text-2xl md:text-3xl">03</p>
                            <img src={three} alt="Image3" className="mt-5 md:mt-10 h-10"/>
                            <div className="text-center text-secondary font-extralight mt-2 text-sm sm:text-base">
                                Customer Service and Satisfaction
                            </div>
                        </div>
                        <div className="flex items-center justify-center text-center flex-col w-[12rem] lg:w-[15rem] mb-5 mb:mb-10">
                            <p className="bg-gradient-to-br from-secondary via-secondary to-secondary bg-clip-text text-transparent font-light font-[Limelight] text-2xl md:text-3xl">04</p>
                            <img src={four} alt="Image4" className="mt-5 md:mt-10 h-10"/>
                            <div className="text-center text-secondary font-extralight mt-2 text-sm sm:text-base">
                                Spot Registration and Clear Title
                            </div>
                        </div>
                        <div className="flex items-center justify-center text-center flex-col w-[12rem] lg:w-[15rem] mb-5 mb:mb-10">
                            <p className="bg-gradient-to-br from-secondary via-secondary to-secondary bg-clip-text text-transparent font-light font-[Limelight] text-2xl md:text-3xl">05</p>
                            <img src={five} alt="Image5" className="mt-5 md:mt-10 h-10"/>
                            <div className="text-center text-secondary font-extralight mt-2 text-sm sm:text-base">
                                Well Developed Projects
                            </div>
                        </div>
                        <div className="flex items-center justify-center text-center flex-col w-[12rem] lg:w-[15rem] mb-5 mb:mb-10">
                            <p className="bg-gradient-to-br from-secondary via-secondary to-secondary bg-clip-text text-transparent font-light font-[Limelight] text-2xl md:text-3xl">06</p>
                            <img src={six} alt="Image6" className="mt-5 md:mt-10 h-10"/>
                            <div className="text-center text-secondary font-extralight mt-2 text-sm sm:text-base">
                                Choosing Heights with High Growth Potential
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="bg-secondary flex items-center justify-center flex-col px-5 sm:px-7 md:px-10 py-16">
                <div>
                    <div>
                        <p className="font-[Limelight] text-primary">Our Mission & Vision</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Why;
