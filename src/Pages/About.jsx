import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    const location = useLocation();
    const aboutSection = useRef(null);

    useEffect(() => {
        if (location.hash === "#about" && aboutSection.current) {
            aboutSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(()=>{
        AOS.init({duration:1000});
        AOS.refresh();
    });

    return (
        <>
            <div ref={aboutSection} className="relative overflow-x-hidden py-20 md:pt-24 md:pb-20 bg-[#f5f5f5] font-[poppins] flex items-center justify-center w-full">
                
            </div>
        </>
    );
}

export default About;
