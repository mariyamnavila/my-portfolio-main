import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CgMail } from "react-icons/cg";
import { toast, Toaster } from "sonner";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
        "w-full border border-(--border-soft) rounded-lg px-4 py-2 bg-transparent text-sm placeholder:text-(--text-secondary) focus:outline-none focus:ring-1 focus:ring-black transition";

    // GSAP animation
    useGSAP(() => {
        ScrollTrigger.refresh()
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
            // Form fields
            // .from('.contact-input', {
            //     y: 20,
            //     opacity: 0,
            //     stagger: 0.15,
            //     duration: 0.8,
            //     ease: "power2.out"
            // }, "-=0.6")
            // Submit button
            .from(".contact-button", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6");

    }, { scope: container });

    return (
        <section ref={container} className="max-w-(--content-width) mx-auto border-x border-(--border-soft) py-20">
            <Toaster position="top-right" />
            <div className="max-w-2xl mx-auto flex flex-col gap-8 px-4 md:px-0">

                {/* Heading */}
                <div className="flex flex-col gap-3 text-center contact-heading">
                    <p className="text-sm tracking-[2px] uppercase font-medium">Contact</p>
                    <h2 className="text-xl md:text-3xl lg:text-[32px]">
                        Let’s build something together
                    </h2>
                    <p className="text-(--text-secondary) text-sm md:text-base">
                        Have a question or want to collaborate? Send me a message and I’ll get back to you as soon as possible.
                    </p>
                </div>

                {/* Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 mb-4">
                        <input type="text" name="user_name" placeholder="Your Name" required className={`${inputClass} contact-input`} />
                        <input type="email" name="user_email" placeholder="Your Email" required className={`${inputClass} contact-input`} />
                        <textarea name="message" placeholder="Your Message" rows="5" required className={`${inputClass} contact-input`}></textarea>
                    </div>


                    <button
                        type="submit"
                        className="relative px-5 py-3 rounded-full text-white font-medium bg-linear-to-r from-[#a58fdf] to-(--extra-color) group contact-button"
                        disabled={loading}
                    >
                        <span className="absolute inset-0 rounded-full bg-black/90 group-hover:bg-transparent transition duration-300 flex items-center justify-center m-0.5">
                            <CgMail className='mr-2 text-xl' /> {loading ? "Sending..." : "Send Message"}
                        </span>
                        <span className="relative flex items-center justify-center">
                            <CgMail className='mr-2 text-xl' /> {loading ? "Sending..." : "Send Message"}
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
