import { useRef } from "react";
import { PiCodeBold } from "react-icons/pi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const experienceData = [
    {
        title: "Full Stack Developer",
        company: "Independent Projects",
        duration: "2025 – Present",
        points: [
            "Developed and deployed 3 full stack web applications",
            "Built REST APIs using Node.js and Express",
            "Designed responsive UI with Tailwind CSS",
            "Integrated MongoDB for dynamic data management",
            "Focused on clean code and scalable structure"
        ]
    }
];

const Experience = () => {
    const container = useRef(null);

    useGSAP(() => {
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
            .from(".exp-card", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.6")
            .from(".exp-icon", {
                scale: 0.5,
                opacity: 0,
                duration: 0.6,
                ease: "back.out(1.7)"
            }, "-=0.7")
            .from(".exp-point", {
                x: -20,
                opacity: 0,
                stagger: 0.15,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.6");

    }, { scope: container });


    return (
        <section ref={container} className="max-w-(--content-width) mx-auto">
            <div className="h-4 border border-(--border-soft)"></div>

            <div className="border-x border-b border-(--border-soft)">
                <div className="max-w-3xl mx-auto px-4 md:px-0 py-10">
                    <p className="exp-heading text-sm tracking-[2px] uppercase font-medium">
                        Experience
                    </p>
                </div>
            </div>

            <div className="border-x border-(--border-soft)">
                <div className="max-w-3xl mx-auto px-4 md:px-0 md:py-10">
                    {experienceData.map((exp, index) => (
                        <div
                            key={index}
                            className="exp-card flex flex-col gap-5 pt-8 md:pt-10 pb-8 md:pb-10 border-b border-dashed border-(--border-soft) last:border-b-0">
                            <PiCodeBold className="exp-icon text-3xl " />
                            <div className="flex flex-wrap gap-5 justify-between items-center">
                                <p className="text-lg font-medium">{exp.title}, {exp.company}</p>
                                <div className="flex items-center border border-(--border-soft) gap-2.5 py-1.5 px-3 rounded-lg text-sm">
                                    <div className="w-4 h-2 bg-black rounded-full animate-pulse" />
                                    <div>{exp.duration}</div>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="exp-point flex items-start gap-2 text-(--text-secondary)">
                                        <span className="w-2.5 h-2.5">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
