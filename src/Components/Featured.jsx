import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        name: "Life Drop",
        image: "/projects/Life-drop.png",
        description:
            "Life Drop is a blood donation web application that connects blood donors with people in urgent need of blood.",
        link: "https://life-drop-17699.web.app/",
    },
    {
        name: "Recipe Book",
        image: "/projects/Recipe-book.png",
        description:
            "Recipe Book is a responsive web application that allows users to manage their personal recipes, discover new ones, and interact with recipes shared by others.",
        link: "https://recipe-book-77bc3.web.app/",
    },
    {
        name: "Royal Ville",
        image: "/projects/Royal-ville.png",
        description:
            "Royal Ville is a hotel room booking web application where users can browse, book, and review hotel rooms.",
        link: "https://royal-ville.web.app/",
    },
    {
        name: "JobTrack",
        image: "/projects/Jobtrack.png",
        description:
            "JobTrack is a frontend web app to apply for jobs and manage applications.",
        link: "https://jobtrack-b425e.web.app/",
    },
]


const Featured = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                toggleActions: "play none none none"
            }
        });

        tl.from(".featured-heading", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".project-card", {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            }, "-=0.6")
            .from(".project-image", {
                scale: 1.1,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.9");

    }, { scope: container });


    return (
        <section ref={container} className="max-w-(--content-width) mx-auto">
            <div className="h-4 border border-(--border-soft)"></div>

            <div className="border-x border-(--border-soft)">
                <div className="max-w-2xl flex flex-col gap-12 mx-auto px-4 md:px-0 py-10">
                    <div className="featured-heading flex flex-col md:flex-row gap-5 items-center justify-between">
                        <p className="text-sm tracking-[2px] uppercase font-medium">
                            Featured work
                        </p>
                        <button className="rounded-md text-sm font-medium transition-all border border-(--border-soft) shadow-xs hover:bg-(--hover-soft) py-3 px-5">
                            Download Resume
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-(--border-soft)">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`project-card block border-b border-(--border-soft) hover:bg-(--hover-soft) transition-all duration-300
                                ${index % 2 === 0 ? "md:border-r" : ""}`}
                        >
                            <div className="flex flex-col gap-3.5 md:gap-5 p-3.5 md:p-6 h-full">
                                <div className="overflow-hidden relative group">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="project-image w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-semibold text-lg border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                                            View Live
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 md:gap-2 px-2 pb-3">
                                    <h4 className="text-2xl font-medium">{project.name}</h4>
                                    <p className="text-(--text-secondary) line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Featured;