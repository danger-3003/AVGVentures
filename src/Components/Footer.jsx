import React from "react";
import { Link } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapLocation, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className="bg-cyan-100 text-slate-800 font-[poppins] py-10 px-5 md:px-7 lg:px-10">
            <div className="flex flex-wrap flex-row items-center justify-center mb-10 gap-4 font-medium">
                <Link className="text-center hover:text-[#c0212e]" to="/#home">
                    Home
                </Link>
                <Link className="text-center hover:text-[#c0212e]" to="/#about">
                    Company
                </Link>
                <Link
                    className="text-center hover:text-[#c0212e]"
                    to="/#projects"
                >
                    Projects
                </Link>
                <Link
                    className="text-center hover:text-[#c0212e]"
                    to="/#location"
                >
                    Location
                </Link>
                <Link
                    className="text-center hover:text-[#c0212e]"
                    to="/#contact"
                >
                    Contact US
                </Link>
            </div>
            <div className="flex items-center justify-center flex-col sm:flex-row sm:flex-wrap md:gap-[17rem] lg:gap-[30rem]">
                <div>
                    {/* <img src={Logo} alt="Logo" className="w-24 md:w-36 lg:w-52" /> */}
                </div>
                <div className="w-[16rem] mt-5 sm:mt-0">
                    <p className="text-[#eb2348] font-semibold text-xl sm:text-2xl my-2 text-center sm:text-left">
                        Contact Us
                    </p>
                    <div className="flex items-start justify-center text-sm sm:text-base flex-col gap-2">
                        <div className="text-center sm:text-left">
                            <FontAwesomeIcon
                                icon={faMapLocation}
                                className=" mr-3"
                            />
                            <a
                                href="https://maps.app.goo.gl/jRJvMaCVj99bm3nd6"
                                target="_blank"
                            >
                                Plot No. 197/1, D-Block, Autonagar, Near
                                Rajadhani Dharma Kata, VSP - 12.
                            </a>
                        </div>
                        <div className="text-center sm:text-left w-full">
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                className="text-green-800 mr-3"
                            />
                            <a
                                href="https://api.whatsapp.com/send?phone=8247092491"
                                target="_blank"
                            >
                                +91 8247092491
                            </a>
                        </div>
                        <div className="text-center sm:text-left w-full">
                            <FontAwesomeIcon
                                icon={faMobileAlt}
                                className=" mr-3"
                            />
                            <a href="tel:9908040888">+91 9908040888</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
