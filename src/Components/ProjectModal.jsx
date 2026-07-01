import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative bg-white rounded-2xl border border-(--border-soft) shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full border border-(--border-soft) hover:bg-(--hover-soft) transition-colors"
                >
                    <IoClose className="text-lg" />
                </button>

                {/* Project Image */}
                <div className="overflow-hidden rounded-t-2xl">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-56 md:h-64 object-cover"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-6 p-6 md:p-8">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-semibold">
                        {project.name}
                    </h3>

                    {/* Tech Stack */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-sm font-medium uppercase tracking-wider text-(--text-secondary)">
                            Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center border border-(--border-soft) text-xs font-medium py-1.5 px-3 rounded-lg"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-sm font-medium uppercase tracking-wider text-(--text-secondary)">
                            Description
                        </h4>
                        <p className="text-sm md:text-base leading-relaxed text-(--text-secondary)">
                            {project.description}
                        </p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-sm font-medium uppercase tracking-wider text-(--text-secondary)">
                            Key Features
                        </h4>
                        <ul className="flex flex-col gap-2">
                            {project.features.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm md:text-base text-(--text-secondary)">
                                    <FaCheckCircle className="text-[#a58fdf] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Improvements */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-sm font-medium uppercase tracking-wider text-(--text-secondary)">
                            Improvements & Future Plans
                        </h4>
                        <ul className="flex flex-col gap-2">
                            {project.improvements.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm md:text-base text-(--text-secondary)">
                                    <FaLightbulb className="text-[#a58fdf] mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#a58fdf] text-white font-medium text-sm hover:opacity-90 transition-opacity"
                        >
                            <FaExternalLinkAlt />
                            Live Demo
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-(--border-soft) font-medium text-sm hover:bg-(--hover-soft) transition-colors"
                        >
                            <FaGithub />
                            View Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
