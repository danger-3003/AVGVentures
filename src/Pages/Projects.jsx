import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
    const ProjectsSection = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#projects" && ProjectsSection.current) {
            ProjectsSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    });

    return (
        <>
            <div
                ref={ProjectsSection}
                className="flex items-center justify-center flex-col bg-[#0b3d66] px-5 sm:px-7 md:px-10 py-20 md:pt-24 font-[poppins]"
            >
                hello
            </div>
        </>
    );
}

export default Projects;
