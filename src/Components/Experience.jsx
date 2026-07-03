import { useRef } from "react";
import { PiBriefcaseBold, PiGraduationCapBold } from "react-icons/pi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
    {
        title: "Full Stack Developer",
        company: "Independent Projects",
        duration: "2025 – Present",
        points: [
            "Developed and deployed full-stack MERN (MongoDB, Express, React, Node) applications",
            "Designed and documented RESTful APIs, securing them with JWT",
            "Designed highly responsive user interfaces utilizing Tailwind CSS",
            "Implemented firebase authentication and role-based access control",
            "Optimized query performance and database indexing with MongoDB"
        ]
    }
];

const educationData = [
    {
        degree: "B.Sc. in Computer Science & Engineering",
        institution: "Your University / Institution",
        duration: "2022 – Present",
        points: [
            "Focusing on Software Engineering, Web Systems, and Algorithms.",
            "Building practical projects utilizing modern web frameworks.",
            "Maintaining strong academic standing and participating in programming workshops."
        ]
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Your College / Institution",
        duration: "Completed",
        points: [
            "Science Group.",
            "Acquired strong analytical and mathematical foundation."
        ]
    }
];

const Experience = () => {
    const container = useRef(null);

    useGSAP(() => {
        ScrollTrigger.refresh();
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                toggleActions: "play none none none"
            }
        });

        tl.from(".exp-heading", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".timeline-column", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            }, "-=0.6")
            .from(".timeline-item", {
                opacity: 0,
                x: (i) => i % 2 === 0 ? -20 : 20,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5");

    }, { scope: container });

    return (
        <section id="experience" ref={container} className="max-w-(--content-width) mx-auto">
            <div className="h-4 border border-(--border-soft)"></div>

            <div className="border-x border-b border-(--border-soft)">
                <div className="max-w-4xl mx-auto px-4 md:px-0 py-10">
                    <p className="exp-heading text-sm tracking-[2px] uppercase font-semibold text-[#a58fdf] text-center md:text-left">
                        Experience & Education
                    </p>
                </div>
            </div>

            <div className="border-x border-(--border-soft) py-12">
                <div className="max-w-4xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Left Column: Experience */}
                    <div className="timeline-column flex flex-col gap-6">
                        <div className="flex items-center gap-2 border-b border-(--border-soft) pb-3">
                            <PiBriefcaseBold className="text-xl text-[#a58fdf]" />
                            <h3 className="text-base font-bold text-slate-900">Professional Experience</h3>
                        </div>

                        <div className="relative border-l-2 border-dashed border-slate-200 pl-5 ml-2.5 space-y-8">
                            {experienceData.map((exp, index) => (
                                <div key={index} className="timeline-item relative group">
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-white group-hover:bg-[#a58fdf] transition-colors duration-300" />

                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] font-bold text-[#a58fdf] uppercase tracking-wider">{exp.duration}</span>
                                        <h4 className="text-sm font-bold text-slate-800">{exp.title}</h4>
                                        <p className="text-xs font-semibold text-slate-500">{exp.company}</p>
                                        <ul className="mt-2 space-y-2">
                                            {exp.points.map((point, i) => (
                                                <li key={i} className="text-xs text-(--text-secondary) leading-relaxed flex items-start gap-1.5">
                                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Education */}
                    <div className="timeline-column flex flex-col gap-6">
                        <div className="flex items-center gap-2 border-b border-(--border-soft) pb-3">
                            <PiGraduationCapBold className="text-xl text-[#a58fdf]" />
                            <h3 className="text-base font-bold text-slate-900">Education Background</h3>
                        </div>

                        <div className="relative border-l-2 border-dashed border-slate-200 pl-5 ml-2.5 space-y-8">
                            {educationData.map((edu, index) => (
                                <div key={index} className="timeline-item relative group">
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-white group-hover:bg-[#a58fdf] transition-colors duration-300" />

                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] font-bold text-[#a58fdf] uppercase tracking-wider">{edu.duration}</span>
                                        <h4 className="text-sm font-bold text-slate-800">{edu.degree}</h4>
                                        <p className="text-xs font-semibold text-slate-500">{edu.institution}</p>
                                        <ul className="mt-2 space-y-2">
                                            {edu.points.map((point, i) => (
                                                <li key={i} className="text-xs text-(--text-secondary) leading-relaxed flex items-start gap-1.5">
                                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
