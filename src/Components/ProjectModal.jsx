import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { FaGithub, FaExternalLinkAlt, FaLightbulb, FaCheckCircle, FaCode } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ProjectModal = ({ project, onClose }) => {
    const overlayRef = useRef(null);
    const modalRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const techRef = useRef(null);
    const descRef = useRef(null);
    const featuresRef = useRef(null);
    const improvementsRef = useRef(null);
    const buttonsRef = useRef(null);

    const [closing, setClosing] = useState(false);
    const tlRef = useRef(null);

    const handleClose = useCallback(() => {
        if (closing) return;
        setClosing(true);

        const tl = gsap.timeline({
            onComplete: () => {
                onClose();
            },
        });

        tl.to(modalRef.current, {
            scale: 0.95,
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: "power2.in",
        }).to(
            overlayRef.current,
            {
                opacity: 0,
                duration: 0.25,
                ease: "power2.in",
            },
            "-=0.15"
        );
    }, [closing, onClose]);

    useEffect(() => {
        if (!project || closing) return;

        const tl = gsap.timeline();
        tlRef.current = tl;

        tl.set(overlayRef.current, { opacity: 0 })
            .set(modalRef.current, { opacity: 0, scale: 0.95, y: 20 })
            .set(
                [imageRef.current, titleRef.current, techRef.current, descRef.current, featuresRef.current, improvementsRef.current, buttonsRef.current],
                { opacity: 0, y: 20 }
            )
            .to(overlayRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
            })
            .to(
                modalRef.current,
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "back.out(1.5)",
                },
                "-=0.15"
            )
            .to(
                imageRef.current,
                { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
                "-=0.2"
            )
            .to(
                titleRef.current,
                { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
                "-=0.2"
            )
            .to(
                techRef.current,
                { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
                "-=0.15"
            )
            .to(
                descRef.current,
                { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
                "-=0.15"
            )
            .to(
                featuresRef.current,
                { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
                "-=0.15"
            )
            .to(
                improvementsRef.current,
                { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
                "-=0.15"
            )
            .to(
                buttonsRef.current,
                { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
                "-=0.15"
            );

        return () => {
            tl.kill();
        };
    }, [project, closing]);

    useEffect(() => {
        if (!project) return;
        const handleEsc = (e) => {
            if (e.key === "Escape") handleClose();
        };
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("keydown", handleEsc);
        };
    }, [project, handleClose]);

    if (!project) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12"
            onClick={handleClose}
        >
            {/* Backdrop Layer */}
            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md" />

            {/* Responsive Main Framework Card */}
            <div
                ref={modalRef}
                className="relative bg-white rounded-2xl md:rounded-3xl border border-(--border-soft) shadow-2xl w-full max-w-5xl h-full max-h-[85vh] md:max-h-[80vh] flex flex-col md:flex-row overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Floating Escape Anchor */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 md:top-4 md:right-4 z-30 p-2 rounded-xl border border-(--border-soft) bg-white/90 backdrop-blur-sm hover:bg-(--hover-soft) hover:rotate-90 text-slate-700 transition-all duration-300 shadow-sm"
                >
                    <IoClose className="text-lg md:text-xl" />
                </button>

                {/* Adaptive Left Media Canvas */}
                <div
                    ref={imageRef}
                    className="relative w-full md:w-[42%] h-48 sm:h-60 md:h-full overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-(--border-soft) bg-slate-50"
                >
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent hidden md:block" />
                </div>

                {/* Right Content Scroller Engine */}
                <div className="flex-1 overflow-y-auto p-5 sm:p-7 md:p-10 space-y-6 md:space-y-8 scrollbar-thin">
                    {/* Header Stack */}
                    <div className="space-y-3 pr-8 md:pr-10">
                        <h3
                            ref={titleRef}
                            className="text-xl sm:text-2xl md:text-3.5xl font-bold tracking-tight text-slate-900 leading-tight"
                        >
                            {project.name}
                        </h3>
                    </div>

                    <hr className="border-(--border-soft)" />

                    {/* Tech Assembly */}
                    <div ref={techRef} className="space-y-2.5">
                        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                            <FaCode className="text-slate-400" /> Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {project.techStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center border border-(--border-soft) bg-slate-50 text-slate-600 text-xs font-medium py-1 md:py-1.5 px-2.5 md:px-3 rounded-xl hover:border-[#a58fdf] hover:text-[#a58fdf] hover:bg-[#a58fdf]/5 transition-all duration-200 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Descriptive Details */}
                    <div ref={descRef} className="space-y-2.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Project Description
                        </h4>
                        <p className="text-sm md:text-base leading-relaxed text-slate-600 font-normal">
                            {project.description}
                        </p>
                    </div>

                    {/* Key Features */}
                    <div ref={featuresRef} className="space-y-2.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Key Features
                        </h4>
                        <ul className="grid grid-cols-1 gap-2 md:gap-2.5">
                            {project.features.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2.5 md:gap-3 text-sm md:text-base text-slate-600 group transition-all duration-200"
                                >
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#a58fdf]/10 text-[#a58fdf] group-hover:scale-110 transition-transform">
                                        <FaCheckCircle className="text-xs" />
                                    </span>
                                    <span className="leading-normal">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Upcoming Updates */}
                    {/* {project.improvements && project.improvements.length > 0 && (
                        <div ref={improvementsRef} className="space-y-2.5">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                Roadmap & Adjustments
                            </h4>
                            <ul className="grid grid-cols-1 gap-2 md:gap-2.5">
                                {project.improvements.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2.5 md:gap-3 text-sm md:text-base text-slate-600 group transition-all duration-200"
                                    >
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-amber-600 group-hover:scale-110 transition-transform">
                                            <FaLightbulb className="text-xs" />
                                        </span>
                                        <span className="leading-normal">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )} */}

                    {/* Lower Operational Controls */}
                    <div ref={buttonsRef} className="flex flex-wrap gap-2 md:gap-3 pt-2">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs md:text-sm font-semibold text-slate-700 bg-white border border-(--border-soft) rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm"
                            >
                                <FaGithub className="text-base" /> Codebase
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs md:text-sm font-semibold text-white bg-[#a58fdf] rounded-xl hover:bg-[#927bc7] transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#a58fdf]/10"
                            >
                                <FaExternalLinkAlt className="text-xs" /> Launch App
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
