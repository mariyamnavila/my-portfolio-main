import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CgMail } from "react-icons/cg";
import { toast, Toaster } from "sonner";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const form = useRef();
    const container = useRef(null);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_h8ovy2p",
                "template_u45xn8f",
                form.current,
                "nXSRBb6-gDNliMLlq"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Message sent successfully! 🎉");
                    setLoading(false);
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    toast.error("Something went wrong. Please try again.");
                    setLoading(false);
                }
            );
    };

    const inputClass =
        "w-full border border-(--border-soft) rounded-xl px-4 py-3 bg-white/40 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:bg-white transition-all duration-300";

    // GSAP animation
    useGSAP(() => {
        ScrollTrigger.refresh();
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
            }
        });

        // Heading + description
        tl.from(".contact-heading", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".contact-input-field", {
                x: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6")
            .from(".contact-button", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6");

    }, { scope: container });

    return (
        <section id="contact" ref={container} className="max-w-(--content-width) mx-auto ">
            <div className="h-4 border-x border-b border-(--border-soft) "></div>
            <div className="border-x border-(--border-soft) bg-[url('./assets/download.svg')] bg-cover bg-center bg-no-repeat py-20">
                <Toaster position="top-right" />
                <div className="max-w-4xl mx-auto flex flex-col gap-10 px-4 md:px-0">

                    {/* Heading */}
                    <div className="flex flex-col gap-3 text-center contact-heading">
                        <p className="text-sm tracking-[2px] uppercase font-semibold text-[#a58fdf]">Contact</p>
                        <h2 className="text-2xl md:text-3.5xl font-bold text-slate-900 leading-tight">
                            Let’s Build Something Together
                        </h2>
                        <p className="text-(--text-secondary) text-sm md:text-base max-w-xl mx-auto">
                            Have a question, an exciting project idea, or just want to say hello? Drop me a line through the form or reach out directly.
                        </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start border-t border-(--border-soft) pt-10">

                        {/* Left Side: Contact details */}
                        <div className="md:col-span-5 flex flex-col gap-6">
                            <div>
                                <h3 className="text-base font-bold text-slate-900 mb-1.5">Direct Contact</h3>
                                <p className="text-xs text-(--text-secondary) leading-relaxed">
                                    Feel free to reach out via email, phone, or WhatsApp. I generally respond within a few hours.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                {/* Email Card */}
                                <a
                                    href="mailto:bibimariyamnavila@gmail.com?subject=Hello%20Mariyam"
                                    className="contact-info-card flex items-center gap-4 p-3.5 rounded-xl border border-(--border-soft) bg-white/50 hover:bg-white hover:shadow-md transition-all duration-300 group"
                                >
                                    <span className="p-3 rounded-xl bg-blue-50 text-blue-500 group-hover:scale-105 transition-transform duration-300">
                                        <FiMail className="text-base sm:text-lg" />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email</p>
                                        <p className="text-xs font-semibold text-slate-800 truncate">bibimariyamnavila@gmail.com</p>
                                    </div>
                                </a>

                                {/* Phone Card */}
                                <a
                                    href="tel:+8801824574234"
                                    className="contact-info-card flex items-center gap-4 p-3.5 rounded-xl border border-(--border-soft) bg-white/50 hover:bg-white hover:shadow-md transition-all duration-300 group"
                                >
                                    <span className="p-3 rounded-xl bg-purple-50 text-purple-500 group-hover:scale-105 transition-transform duration-300">
                                        <FiPhone className="text-base sm:text-lg" />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Phone </p>
                                        <p className="text-xs font-semibold text-slate-800 truncate">+880 1824574234</p>
                                    </div>
                                </a>

                                {/* WhatsApp Card */}
                                <a
                                    href="https://wa.me/8801824574234"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-info-card flex items-center gap-4 p-3.5 rounded-xl border border-(--border-soft) bg-white/50 hover:bg-white hover:shadow-md hover:border-green-500/20 transition-all duration-300 group"
                                >
                                    <span className="p-3 rounded-xl bg-green-50 text-green-500 group-hover:scale-105 transition-transform duration-300">
                                        <FaWhatsapp className="text-base sm:text-lg" />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">WhatsApp</p>
                                        <p className="text-xs font-semibold text-slate-800 truncate">Chat on WhatsApp</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Contact form */}
                        <div className="md:col-span-7 flex flex-col gap-4">
                            <h3 className="text-base font-bold text-slate-900">Send a Message</h3>

                            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                                <div className="flex flex-col gap-3.5">
                                    <div className="contact-input-field flex flex-col gap-1.5">
                                        <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider px-1">Your Name</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            placeholder="Your Name"
                                            required
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="contact-input-field flex flex-col gap-1.5">
                                        <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider px-1">Your Email</label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            placeholder="Your Email"
                                            required
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="contact-input-field flex flex-col gap-1.5">
                                        <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider px-1">Your Message</label>
                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows="5"
                                            required
                                            className={inputClass}
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="relative px-5 py-3.5 rounded-full text-white font-semibold bg-[#a58fdf] group contact-button cursor-pointer"
                                    disabled={loading}
                                >
                                    <span className="absolute inset-0 rounded-full bg-black/95 group-hover:bg-transparent transition duration-300 flex items-center justify-center m-0.5">
                                        <CgMail className='mr-2 text-xl' /> {loading ? "Sending..." : "Send Message"}
                                    </span>
                                    <span className="relative flex items-center justify-center">
                                        <CgMail className='mr-2 text-xl' /> {loading ? "Sending..." : "Send Message"}
                                    </span>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="h-4 border-x border-t border-(--border-soft)"></div>
        </section>
    );
};

export default Contact;
