import {useEffect, useRef} from "react";
import { useLocation, Link } from "react-router-dom";

function Locations() {
    const locationSection=useRef(null)
    const location = useLocation();

    useEffect(()=>{
        if(location.hash==="#location" && locationSection.current)
        {
            locationSection.current.scrollIntoView({behavior:"smooth"});
        }
    },[location]);

    return (
        <>
            <div ref={locationSection} className="font-[poppins] px-5 md:px-7 lg:px-10 py-10 pt-20 bg-[#f5f5f5]">
                
            </div>
        </>
    );
}

export default Locations;
