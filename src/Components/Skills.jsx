import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const skillPill =
    "skill-pill inline-flex items-center justify-center border border-(--border-soft) text-xs font-medium py-1.5 px-3 rounded-lg hover:shadow-lg transition-[box-shadow] duration-200";

const Skills = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
                toggleActions: "play none none none",
            }
        });

        tl.from(".skills-heading", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        })
            .from(".skills-column", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.6")
            .from(".skill-pill", {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power2.out"
            }, "-=0.6");

    }, { scope: container });

    return (
        <section ref={container} className="max-w-(--content-width) mx-auto">
            <div className="h-4 border border-(--border-soft)"></div>

            <div className="border-x border-(--border-soft) py-17">
                <div className="max-w-2xl flex flex-col gap-12 mx-auto px-4 md:px-0">

                    {/* Heading */}
                    <div className="skills-heading flex flex-col gap-4">
                        <p className="text-sm tracking-[2px] uppercase font-medium">
                            Skills
                        </p>
                        <h2 className="text-xl md:text-3xl lg:text-[32px]">
                            Technologies I work with
                        </h2>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Left Column */}
                        <div className="skills-column flex flex-col gap-10">

                            <div className="flex flex-col gap-4">
                                <h4 className="font-medium text-lg">Frontend</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className={skillPill}>React</span>
                                    <span className={skillPill}>Next.js</span>
                                    <span className={skillPill}>Tailwind CSS</span>
                                    <span className={skillPill}>HTML</span>
                                    <span className={skillPill}>Javascript</span>
                                    <span className={skillPill}>CSS</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4 className="font-medium text-lg">Backend</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className={skillPill}>Node.js</span>
                                    <span className={skillPill}>Express.js</span>
                                    <span className={skillPill}>MongoDB</span>
                                    <span className={skillPill}>REST API</span>
                                </div>
                            </div>

                        </div>

                        {/* Right Column */}
                        <div className="skills-column flex flex-col gap-10">

                            <div className="flex flex-col gap-4">
                                <h4 className="font-medium text-lg">Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className={skillPill}>Git</span>
                                    <span className={skillPill}>Firebase</span>
                                    <span className={skillPill}>Figma</span>
                                    <span className={skillPill}>VS Code</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4 className="font-medium text-lg">Deployment</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className={skillPill}>Vercel</span>
                                    <span className={skillPill}>Netlify</span>
                                    <span className={skillPill}>Firebase-Hosting</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
