import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Image1 from "../assets/Gallery/Image1.jpg";
import Image2 from "../assets/Gallery/Image2.jpg"
import Image3 from "../assets/Gallery/Image3.jpg"
import Image4 from "../assets/Gallery/Image4.jpg"
import Image5 from "../assets/Gallery/Image5.jpg"
import Image6 from "../assets/Gallery/Image6.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

function Gallery() {
    const gallerySection = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#gallery" && gallerySection.current) {
            gallerySection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });

    return (
        <>
            <div
                ref={gallerySection}
                className="flex items-center justify-center flex-col bg-secondary px-5 sm:px-7 md:px-10 py-20 md:pt-24 font-[poppins]"
            >
                <p className="font-[Limelight] font-bold text-2xl md:text-3xl lg:text-4xl">Our Gallery</p>
                <div className="flex flex-wrap flex-row items-center justify-center mt-5">
                    <div
                        data-aos="fade-up"
                        className="flex flex-col items-center justify-center"
                    >
                        <img
                            src={Image1}
                            alt="ImageOne"
                            className="h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg object-cover"
                            style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}
                        />
                        <img
                            src={Image2}
                            alt="ImageTwo"
                            className="h-40 w-40 md:w-48 lg:w-64 m-2 rounded-lg object-cover"
                            style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}
                        />
                        <img
                            src={Image3}
                            alt="ImageThree"
                            className="h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg object-cover"
                            style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}
                        />
                    </div>
                    <div
                        data-aos="fade-down"
                        className="flex flex-col items-center justify-center"
                    >
                        <img
                            src={Image4}
                            alt="ImageFive"
                            className="h-40 w-40 md:w-48 lg:w-64 m-2 rounded-lg object-cover"
                            style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}
                        />
                        <img
                            src={Image5}
                            alt="ImageSix"
                            className="h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg object-cover"
                            style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}
                        />
                        <img
                            src={Image6}
                            alt="ImageFour"
                            className="h-60 w-40 md:w-48 lg:w-64 m-2 rounded-lg object-cover"
                            style={{boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
