import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        name: "Life Drop",
        image: "/projects/Life-drop.png",
        description:
            "Life Drop is a blood donation web application that connects blood donors with people in urgent need of blood.",
        link: "https://life-drop-17699.web.app/",
        github: "https://github.com/mariyamnavila/life-drop",
        techStack: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
        features: [
            "Donor registration and profile management",
            "Blood request creation with location and blood type",
            "Search and filter donors by blood group and area",
            "Email notifications for matching requests",
        ],
        improvements: [
            "Add real-time blood availability tracking",
            "Implement push notifications for urgent requests",
            "Add multi-language support for broader accessibility",
            "Integrate maps for nearby donation centers",
        ],
    },
    {
        name: "Recipe Book",
        image: "/projects/Recipe-book.png",
        description:
            "Recipe Book is a responsive web application that allows users to manage their personal recipes, discover new ones, and interact with recipes shared by others.",
        link: "https://recipe-book-77bc3.web.app/",
        github: "https://github.com/mariyamnavila/recipe-book-client",
        techStack: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
        features: [
            "User authentication and personal recipe collection",
            "Add, edit, and delete recipes with images",
            "Like and comment on recipes from other users",
            "Category-based recipe filtering",
        ],
        improvements: [
            "Add recipe filtering by dietary preferences",
            "Implement a shopping list generator from recipes",
            "Add social features like following other cooks",
            "Support recipe video uploads",
        ],
    },
    {
        name: "Royal Ville",
        image: "/projects/Royal-ville.png",
        description:
            "Royal Ville is a hotel room booking web application where users can browse, book, and review hotel rooms.",
        link: "https://royal-ville.web.app/",
        github: "https://github.com/mariyamnavila/royal-ville-client",
        techStack: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
        features: [
            "Browse available rooms with filters and pricing",
            "Room booking with date selection and confirmation",
            "User reviews and ratings for booked rooms",
            "Admin panel for managing rooms and bookings",
        ],
        improvements: [
            "Add payment integration for online booking",
            "Implement room availability calendar",
            "Add admin dashboard for hotel management",
            "Integrate a review moderation system",
        ],
    },
    {
        name: "JobTrack",
        image: "/projects/Jobtrack.png",
        description:
            "JobTrack is a frontend web app to apply for jobs and manage applications.",
        link: "https://jobtrack-b425e.web.app/",
        github: "https://github.com/mariyamnavila/jobtrack",
        techStack: ["React", "Tailwind CSS", "Firebase Auth"],
        features: [
            "Browse job listings with company details",
            "Apply to jobs with a single click",
            "Track application status in a dashboard",
            "Filter jobs by category and location",
        ],
        improvements: [
            "Add backend for persistent application storage",
            "Implement job search filters and sorting",
            "Add email notifications for application status",
            "Support resume upload and parsing",
        ],
    },
]


const Featured = () => {
    const container = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

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
            // .from(".project-card", {
            //     y: 80,
            //     opacity: 0,
            //     duration: 1,
            //     stagger: 0.2,
            //     ease: "power3.out"
            // }, "-=0.6")
            .from(".project-image", {
                scale: 1.1,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.9");

    }, { scope: container });


    return (
        <section id="projects" ref={container} className="max-w-(--content-width) mx-auto">
            <div className="h-4 border border-(--border-soft)"></div>

            <div className="border-x border-(--border-soft)">
                <div className="max-w-3xl flex flex-col gap-12 mx-auto px-4 md:px-0 py-10">
                    <div className="featured-heading flex flex-col md:flex-row gap-5 items-center justify-between">
                        <p className="text-sm tracking-[2px] uppercase font-medium">
                            Featured work
                        </p>
                        <a
                            href="mailto:bibimariyamnavila@gmail.com"
                            className="rounded-md text-sm font-medium transition-all border border-(--border-soft) shadow-xs hover:bg-(--hover-soft) py-3 px-5">
                            Get in touch
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-(--border-soft)">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-card flex flex-col border-b border-(--border-soft) hover:bg-(--hover-soft) transition-all duration-300
                                ${index % 2 === 0 ? "md:border-r" : ""}`}
                        >
                            <div className="flex flex-col gap-3.5 md:gap-5 p-3.5 md:p-6 h-full">
                                <div className="overflow-hidden relative group">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="project-image w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 px-2 pb-3">
                                    <h4 className="text-2xl font-medium">{project.name}</h4>
                                    <p className="text-(--text-secondary) text-sm line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#a58fdf] text-white text-xs font-medium hover:opacity-90 transition-opacity"
                                        >
                                            Details
                                        </button>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-(--border-soft) text-xs font-medium hover:bg-(--hover-soft) transition-colors"
                                        >
                                            <FaGithub /> GitHub
                                        </a>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-(--border-soft) text-xs font-medium hover:bg-(--hover-soft) transition-colors"
                                        >
                                            <FaExternalLinkAlt /> Live
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Featured;