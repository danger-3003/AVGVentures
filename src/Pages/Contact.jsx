import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Contact() {
    const location = useLocation();
    const contactSection = useRef(null);
    const [disable, setDisable] = useState(false);
    const [details, setDetails] = useState({
        name: "",
        email: "",
        number: "",
        Subject: "",
        Body: "",
    });

    useEffect(() => {
        if (location.hash === "#contact" && contactSection.current) {
            contactSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisable(true);
        const data = {
            name: details.name,
            email: details.email,
            toMail: "nsteelroofing@gmail.com",
            toName: "Nanddhan Steel Roofing Industries",
            phone: details.number,
            subject: details.Subject, // Include inquiryType in subject
            message: details.Body,
        };
        axios
            .post("https://api.qrdcard.com/api/url/sendmail", data)
            .then((res) => {
                if (res) {
                    setDisable(false);
                    alert("Form Submitted Successfully");
                    setDetails({
                        details,
                        name: "",
                        email: "",
                        number: "",
                        Subject: "",
                        Body: "",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(details);
    };

    return (
        <div
            ref={contactSection}
            className="flex items-center justify-center flex-wrap flex-col md:flex-row gap-10 py-20 bg-[#fff]"
        >
            <div className="flex items-center justify-center flex-col">
                <p className="text-2xl font-extrabold font-[Nunito] text-center md:text- w-full text-[#c0212e]">
                    Contact Us -{" "}
                </p>
                <div>
                    <form action="" onSubmit={handleSubmit}>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-72"
                            } sm:w-72 md:w-80 my-2`}
                        >
                            <p className="font-semibold text-lg">
                                Name <span className="text-red-600">*</span>
                            </p>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={details.name}
                                required
                                name="name"
                                onChange={(e) => {
                                    setDetails({
                                        ...details,
                                        name: e.target.value,
                                    });
                                }}
                                className="border-b-2 border-[#1e4b8c] outline-none bg-[#eeeeee] shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-72"
                            } sm:w-72 md:w-80 my-2`}
                        >
                            <p className="font-semibold text-lg">
                                Email <span className="text-red-600">*</span>
                            </p>
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={details.email}
                                required
                                name="email"
                                onChange={(e) => {
                                    setDetails({
                                        ...details,
                                        email: e.target.value,
                                    });
                                }}
                                className="border-b-2 border-[#1e4b8c] outline-none bg-[#eeeeee] shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-72"
                            } sm:w-72 md:w-80 my-2`}
                        >
                            <p className="font-semibold text-lg">
                                Mobile Number{" "}
                                <span className="text-red-600">*</span>
                            </p>
                            <input
                                type="number"
                                placeholder="Your mobile number"
                                value={details.number}
                                required
                                name="mobile"
                                onChange={(e) => {
                                    setDetails({
                                        ...details,
                                        number: e.target.value,
                                    });
                                }}
                                className="border-b-2 border-[#1e4b8c] outline-none bg-[#eeeeee] shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-72"
                            } sm:w-72 md:w-80 my-2`}
                        >
                            <p className="font-semibold text-lg">
                                Subject<span className="text-red-600">*</span>
                            </p>
                            <input
                                type="text"
                                placeholder="Subject"
                                required
                                value={details.Subject}
                                name="country"
                                onChange={(e) => {
                                    setDetails({
                                        ...details,
                                        Subject: e.target.value,
                                    });
                                }}
                                className="border-b-2 border-[#1e4b8c] outline-none bg-[#eeeeee] shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-72"
                            } sm:w-72 md:w-80 my-2`}
                        >
                            <p className="font-semibold text-lg">
                                Message<span className="text-red-600">*</span>
                            </p>
                            <input
                                type="text"
                                placeholder="Your Message"
                                name="body"
                                value={details.Body}
                                onChange={(e) => {
                                    setDetails({
                                        ...details,
                                        Body: e.target.value,
                                    });
                                }}
                                className="border-b-2 border-[#1e4b8c] outline-none bg-[#eeeeee] shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div className="flex justify-center mt-5">
                            <button
                                type="submit"
                                disabled={disable}
                                className="bg-[#c0212e] hover:bg-[#ff5d6b] rounded-sm px-6 py-1 text-[#fff] font-semibold shadow-md shadow-slate-400 transition-all duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="">
                <iframe
                    className="w-[90vw] h-60 sm:w-[80vw] sm:h-56 md:h-72 md:w-[26rem] lg:h-80 lg:w-[35rem]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.6629875267827!2d83.30567267822478!3d17.741942308147188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943004e2568f7%3A0x9714556fa4938387!2sAVG%20VENTURES!5e1!3m2!1sen!2sin!4v1733139517481!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="eager"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;
