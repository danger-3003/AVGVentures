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
            className="flex items-center justify-center flex-wrap flex-col-reverse md:flex-row gap-10 py-20 bg-[#fff]"
        >
            <div className="flex items-center justify-center flex-col">
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
                                className="border-b-2 border-text outline-none bg-[#eeeeee] shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
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
                                className="border-b-2 border-text outline-none bg-[#eeeeee] shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
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
                                className="border-b-2 border-text outline-none bg-[#eeeeee] shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
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
                                className="border-b-2 border-text outline-none bg-[#eeeeee] shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
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
                                className="border-b-2 border-text outline-none bg-[#eeeeee] shadow-md shadow-slate-400 rounded-sm w-full px-2 py-1 text-slate-900"
                            />
                        </div>
                        <div className="flex justify-center mt-5">
                            <button
                                type="submit"
                                disabled={disable}
                                className="bg-primary hover:bg-[#0f503b] rounded-sm px-6 py-1 text-[#fff] font-semibold shadow-md shadow-slate-400 transition-all duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-full text-center md:w-[20rem] lg:w-[30rem] text-primary px-5 md:px-10">
                <p className="text-3xl lg:text-4xl font-bold">Have questions or need more details?</p>
                <p>Fill out the form below, and our team will get back to you promptly!</p>
            </div>
        </div>
    );
}

export default Contact;
