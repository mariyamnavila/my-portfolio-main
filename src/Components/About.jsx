import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCode, FaDatabase, FaPalette, FaLink, FaLayerGroup, FaCompass } from "react-icons/fa";
import { FiSmartphone, FiBookOpen, FiAward } from "react-icons/fi";
import { SiReact, SiNodedotjs } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const container = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = container.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(node);

        const fallback = setTimeout(() => setVisible(true), 2000);
        return () => {
            observer.disconnect();
            clearTimeout(fallback);
        };
    }, []);

    const services = [
        { name: "Web Development", icon: FaCode, color: "text-blue-500" },
        { name: "Frontend Development", icon: SiReact, color: "text-cyan-500" },
        { name: "Backend Development", icon: SiNodedotjs, color: "text-green-600" },
        { name: "Full-Stack Apps", icon: FaLayerGroup, color: "text-indigo-500" },
        { name: "Responsive Design", icon: FiSmartphone, color: "text-purple-500" },
        { name: "UI/UX Implementation", icon: FaPalette, color: "text-pink-500" },
        { name: "API Integration", icon: FaLink, color: "text-orange-500" },
        { name: "Database Management", icon: FaDatabase, color: "text-amber-500" },
        { name: "Project Prototyping", icon: FaCompass, color: "text-teal-500" }
    ];

    useGSAP(() => {
        ScrollTrigger.refresh();
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });

        tl.from(".about-text", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.15
        });

    }, { scope: container });

    return (
        <section id="about" ref={container} className="max-w-(--content-width) mx-auto ">
            <div className="h-4 border border-(--border-soft)"></div>
            <div className="bg-[url('./assets/download.svg')] bg-cover bg-center bg-no-repeat border-x border-(--border-soft) py-16">
                <div className="max-w-4xl flex flex-col gap-10 sm:gap-12 mx-auto px-4 md:px-0">

                    {/* Header Block */}
                    <div className="flex flex-col gap-4 about-text">
                        <p className="text-sm tracking-[2px] uppercase font-semibold text-[#a58fdf]">About Me</p>
                        <h2 className="text-2xl md:text-3.5xl font-bold text-slate-900 leading-tight">
                            Hey there. I’m Bibi Mariyam.
                        </h2>
                        <p className="text-base md:text-lg text-(--text-secondary) leading-relaxed">
                            I develop modern full-stack web applications using React, Node.js, and JavaScript. My focus is on creating responsive interfaces, scalable backend solutions, and delivering smooth user experiences.
                        </p>
                    </div>

                    {/* Dual-Section Journey & Hobbies */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 border-t border-(--border-soft) pt-8">
                        {/* Journey */}
                        <div className="flex flex-col gap-3 about-text">
                            <h3 className="text-xs uppercase font-bold text-slate-800 tracking-wider flex items-center gap-2">
                                <FiBookOpen className="text-[#a58fdf] text-base" /> Programming Journey
                            </h3>
                            <p className="text-sm text-(--text-secondary) leading-relaxed">
                                My journey began with a curiosity about how lines of code create interactive experiences. What started as basic HTML experiments quickly turned into a passion for modern web engineering. Today, I build full-stack projects like <strong>RecipeBook</strong>, <strong>Royal Ville</strong>, and <strong>LifeDrop</strong>, focusing on robust code architectures.
                            </p>
                        </div>

                        {/* Hobbies & Personality */}
                        <div className="flex flex-col gap-3 about-text">
                            <h3 className="text-xs uppercase font-bold text-slate-800 tracking-wider flex items-center gap-2">
                                <FiAward className="text-[#a58fdf] text-base" /> Interests & Personality
                            </h3>
                            <p className="text-sm text-(--text-secondary) leading-relaxed">
                                Outside of programming, I enjoy creating digital art and drawing. I also love reading books, and you'll occasionally find me looking up at the sky, appreciating a quiet sunset or a sky full of clouds. These moments help me stay creative and inspired in both design and development.
                            </p>
                        </div>
                    </div>

                    {/* Work Philosophy Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-(--border-soft) pt-8">
                        <div style={{ transitionDelay: visible ? "0ms" : "0ms" }} className={`philosophy-card flex flex-col gap-2 p-4 rounded-xl border border-(--border-soft) bg-white/60 hover:bg-white hover:shadow-md transition-all duration-500 ease-out group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                            <span className="w-7 h-7 rounded-lg bg-[#a58fdf]/10 text-[#a58fdf] flex items-center justify-center text-xs font-bold mb-1 group-hover:scale-110 transition-transform">01</span>
                            <h4 className="text-sm font-semibold text-slate-900">Craftsmanship</h4>
                            <p className="text-xs text-(--text-secondary) leading-relaxed">Writing clean, modular, and easily-maintainable code layers.</p>
                        </div>
                        <div style={{ transitionDelay: visible ? "100ms" : "0ms" }} className={`philosophy-card flex flex-col gap-2 p-4 rounded-xl border border-(--border-soft) bg-white/60 hover:bg-white hover:shadow-md transition-all duration-500 ease-out group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                            <span className="w-7 h-7 rounded-lg bg-[#a58fdf]/10 text-[#a58fdf] flex items-center justify-center text-xs font-bold mb-1 group-hover:scale-110 transition-transform">02</span>
                            <h4 className="text-sm font-semibold text-slate-900">UX Empathy</h4>
                            <p className="text-xs text-(--text-secondary) leading-relaxed">Designing with the user in mind—prioritizing speed and responsiveness.</p>
                        </div>
                        <div style={{ transitionDelay: visible ? "200ms" : "0ms" }} className={`philosophy-card flex flex-col gap-2 p-4 rounded-xl border border-(--border-soft) bg-white/60 hover:bg-white hover:shadow-md transition-all duration-500 ease-out group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                            <span className="w-7 h-7 rounded-lg bg-[#a58fdf]/10 text-[#a58fdf] flex items-center justify-center text-xs font-bold mb-1 group-hover:scale-110 transition-transform">03</span>
                            <h4 className="text-sm font-semibold text-slate-900">Fast Learning</h4>
                            <p className="text-xs text-(--text-secondary) leading-relaxed">Constantly acquiring new technical skills and architectural practices.</p>
                        </div>
                    </div>

                    {/* Services and Capabilities */}
                    <div className="flex flex-col gap-4 border-t border-(--border-soft) pt-8">
                        <p className="text-xs uppercase font-bold text-slate-800 tracking-wider about-text">Services & Capabilities</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {
                                services.map((ser, index) => {
                                    const Icon = ser.icon;
                                    return (
                                        <div
                                            key={index}
                                            style={{ transitionDelay: visible ? `${index * 80}ms` : "0ms" }}
                                            className={`service-item flex items-center gap-3 border border-(--border-soft) bg-white/50 py-3 px-4 rounded-xl hover:bg-white hover:shadow-md hover:border-[#a58fdf]/30 cursor-default group transition-all duration-500 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                                        >
                                            <span className={`p-2 rounded-lg bg-slate-50 ${ser.color} group-hover:scale-105 transition-transform`}>
                                                <Icon className="text-sm" />
                                            </span>
                                            <span className="text-xs font-semibold text-slate-700">{ser.name}</span>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;