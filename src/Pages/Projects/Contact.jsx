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
            toMail: "",
            toName: "AVG Ventures",
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
            className="flex items-center overflow-hidden relative justify-center p-5 pt-3 w-min rounded-2xl bg-[#ffffff28] font-[poppins]"
            style={{backdropFilter:"blur(20px)"}}
        >
            <div className="flex items-center justify-center flex-col">
                <div>
                    <form action="" onSubmit={handleSubmit}>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-60"
                            } sm:w-60 md:w-64 my-2`}
                        >
                            <p className="font-light text-white text-sm">
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
                                className="border-b-2 border-text outline-none bg-[#fff] text-sm rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-60"
                            } sm:w-60 md:w-64 my-2`}
                        >
                            <p className="font-light text-white text-sm">
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
                                className="border-b-2 border-text outline-none bg-[#fff] text-sm rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-60"
                            } sm:w-60 md:w-64 my-2`}
                        >
                            <p className="font-light text-white text-sm">
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
                                className="border-b-2 border-text outline-none bg-[#fff] text-sm rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-60"
                            } sm:w-60 md:w-64 my-2`}
                        >
                            <p className="font-light text-white text-sm">
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
                                className="border-b-2 border-text outline-none bg-[#fff] text-sm rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div
                            className={`${
                                window.innerWidth < 350 ? "w-[80vw]" : "w-60"
                            } sm:w-60 md:w-64 my-2`}
                        >
                            <p className="font-light text-white text-sm">
                                Message<span className="text-red-600">*</span>
                            </p>
                            <textarea
                                type="text"
                                placeholder="Your Message"
                                name="body"
                                rows={3}
                                value={details.Body}
                                onChange={(e) => {
                                    setDetails({
                                        ...details,
                                        Body: e.target.value,
                                    });
                                }}
                                className="border-b-2 border-text outline-none bg-[#fff] text-sm rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div className="flex justify-center mt-2">
                            <button
                                type="submit"
                                disabled={disable}
                                className="bg-primary hover:bg-[#0f503b] rounded-sm px-3 py-1 text-[#fff] text-sm transition-all duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
