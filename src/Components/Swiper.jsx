import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Hillcrest from "../assets/Projects/Hillcrest.jpg";
import Lakeview from "../assets/Projects/Lakeview.jpg";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";
import { faAngleRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HillcrestBrochure from "../assets/Brochure/Hillcrest.pdf"
import LakeviewBrochure from "../assets/Brochure/Lake View.pdf"

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
    const navigate = useNavigate();

    const handleNavigate = (page) => {
        navigate(page);
    };
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="rounded-xl sm:rounded-2xl md:rounded-3xl bg-secondary relative"
            >
                <SwiperSlide>
                    <div className="w-full relative h-max bg-secondary text-text flex items-center justify-between flex-col md:flex-row rounded-xl sm:rounded-2xl md:rounded-3xl">
                        <img
                            src={Hillcrest}
                            alt="Hillcrest"
                            className="w-[80vw] sm:w-[20rem] lg:w-[25rem] h-56 sm:h-[20rem] lg:h-[25rem] rounded-xl sm:rounded-2xl md:rounded-3xl"
                            style={{
                                boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
                            }}
                        />
                        <div className="w-full flex items-center md:items-start justify-center flex-col py-5 px-5 md:px-10 ">
                            <p className="font-[LimeLight] text-xl md:text-2xl lg:text-3xl">
                                Hillcrest Valley
                            </p>
                            <p className="mt-5 mb-10 text-sm sm:text-base text-center md:text-left">
                                Hillcrest Valley offers premium plots surrounded
                                by scenic hills, near highways, reservoirs,
                                waterfalls, and a renowned temple. Ideal
                                investment!
                            </p>
                            <div
                                className="group relative w-40 h-10 mb-5 rounded-full flex items-center hover:cursor-pointer overflow-hidden font-[Nunito]"
                                onClick={() => {
                                    handleNavigate("/hillcrest");
                                }}
                            >
                                <div className="w-40 absolute z-[2] flex items-center left-[10%] group-hover:left-[85%] duration-500 rounded-full">
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        className="text-secondary"
                                    />
                                </div>
                                <p className="text-center w-full relative z-[3] group-hover:text-secondary duration-500 font-semibold">
                                    Visit Here
                                </p>
                                <div className="w-full bg-primary h-10 rounded-full absolute z-[1] -left-[75%] group-hover:left-0 duration-500"></div>
                            </div>
                        </div>
                        <a href={HillcrestBrochure} target="_blank">
                            <div className="group bg-primary hover:bg-secondary duration-300 absolute bottom-5 right-5 h-8 px-3 gap-2 flex items-center justify-center rounded-full animate-bounce" style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.5"}}>
                                <p className="text-secondary group-hover:text-primary font-semibold text-sm">Brochure</p>
                                <FontAwesomeIcon
                                    icon={faArrowDown}
                                    className="text-secondary group-hover:text-primary"
                                />
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full relative h-max bg-secondary text-text flex items-center justify-between flex-col md:flex-row rounded-xl sm:rounded-2xl md:rounded-3xl">
                        <img
                            src={Lakeview}
                            alt="Lakeview"
                            className="w-[80vw] sm:w-[20rem] lg:w-[25rem] h-56 sm:h-[20rem] lg:h-[25rem] rounded-xl sm:rounded-2xl md:rounded-3xl"
                            style={{
                                boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
                            }}
                        />
                        <div className="w-full flex items-center md:items-start justify-center flex-col py-5 px-5 md:px-10 ">
                            <p className="font-[LimeLight] text-xl md:text-2xl lg:text-3xl">
                                Lake View
                            </p>
                            <p className="mt-5 mb-10 text-sm sm:text-base text-center md:text-left">
                                Lake View offers serene living with scenic
                                beauty, proximity to waterfalls, temples,
                                highways, coffee plantations, and Borra Caves.
                                Perfect escape!
                            </p>
                            <div
                                className="group relative w-40 h-10 mb-5 rounded-full flex items-center hover:cursor-pointer overflow-hidden font-[Nunito]"
                                onClick={() => {
                                    handleNavigate("/lakeview");
                                }}
                            >
                                <div className="w-40 absolute z-[2] flex items-center left-[10%] group-hover:left-[85%] duration-500 rounded-full">
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        className="text-secondary"
                                    />
                                </div>
                                <p className="text-center w-full relative z-[3] group-hover:text-secondary duration-500 font-semibold">
                                    Visit Here
                                </p>
                                <div className="w-full bg-primary h-10 rounded-full absolute z-[1] -left-[75%] group-hover:left-0 duration-500"></div>
                            </div>
                        </div>
                        <a href={LakeviewBrochure} target="_blank">
                            <div className="group bg-primary hover:bg-secondary duration-300 absolute bottom-5 right-5 h-8 px-3 gap-2 flex items-center justify-center rounded-full animate-bounce" style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.5"}}>
                                <p className="text-secondary group-hover:text-primary font-semibold text-sm">Brochure</p>
                                <FontAwesomeIcon
                                    icon={faArrowDown}
                                    className="text-secondary group-hover:text-primary"
                                />
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}