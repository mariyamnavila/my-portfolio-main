import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const container = useRef(null);

    const services = [
        "Web Development",
        "Frontend Development",
        "Backend Development",
        "Full-Stack Applications",
        "Responsive Design",
        "UI/UX Implementation",
        "API Integration",
        "Database Management",
        // "Performance Optimization",
        "Project Prototyping"
    ];

    useGSAP(() => {
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
            stagger: 0.2
        })
            .from(".service-item", {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.5");

    }, { scope: container });


    return (
        <section id="about" ref={container} className="max-w-(--content-width) mx-auto ">
            <div className="h-4 border border-(--border-soft)"></div>
            <div className="bg-[url('./assets/download.svg')] bg-cover bg-center bg-no-repeat border-x border-(--border-soft) py-17">
                <div className="max-w-2xl flex flex-col gap-9 sm:gap-12 mx-auto px-4 md:px-0">
                    <div className="flex flex-col gap-4 about-text">
                        <p className="text-sm tracking-[2px] uppercase font-medium">About Me</p>
                        <h2 className="text-xl md:text-3xl lg:text-[32px]">Hey there. I’m Mariyam — a web developer creating responsive, user-friendly web apps with React and Node.js, focused on clean code and smooth user experiences.</h2>
                        <h5 className="text-(--text-secondary)">Built projects including RecipeBook, Royal Ville, and LifeDrop.</h5>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-sm uppercase font-medium">Services</p>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {
                                services.map(ser => <span className="service-item inline-flex items-center justify-center border border-(--border-soft) text-xs font-medium whitespace-nowrap shrink-0 py-1.5 px-3 rounded-lg hover:shadow-lg transition-shadow duration-200">{ser}</span>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;