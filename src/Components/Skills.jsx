import React, { useRef, useEffect, useState } from "react";
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiJavascript, SiCss3,
    SiNodedotjs, SiTypescript, SiPostgresql, SiExpress, SiPrisma, SiMongodb,
    SiGit, SiFirebase, SiFigma,
    SiVercel, SiNetlify, SiSwagger
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillGroups = [
    {
        title: "Frontend",
        blurb: "Responsive interfaces with thoughtful interaction and speed.",
        accent: "bg-[#f8f2ff]",
        icon: SiReact,
        skills: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
            { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
            { name: "HTML", icon: SiHtml5, color: "#E34F26" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "CSS", icon: SiCss3, color: "#1572B6" },
        ],
    },
    {
        title: "Backend",
        blurb: "Reliable APIs and data layers built for modern apps.",
        accent: "bg-[#fff8e8]",
        icon: SiNodedotjs,
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Postgres", icon: SiPostgresql, color: "#4169E1" },
            { name: "Express", icon: SiExpress, color: "#111827" },
            { name: "Prisma", icon: SiPrisma, color: "#0C344B" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "REST API", icon: SiSwagger, color: "#85EA2D" },
        ],
    },
    {
        title: "Tools",
        blurb: "Clean workflows from design to deployment.",
        accent: "bg-[#f3f7ff]",
        icon: SiGit,
        skills: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        ],
    },
    {
        title: "Deployment",
        blurb: "Fast, reliable delivery with modern hosting platforms.",
        accent: "bg-[#fef7ef]",
        icon: SiVercel,
        skills: [
            { name: "Vercel", icon: SiVercel, color: "#111827" },
            { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
            { name: "Hosting", icon: SiFirebase, color: "#FFCA28" },
        ],
    },
];

const Skills = () => {
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

        // Hard guarantee: no matter what, cards become visible within 1.5s
        const fallback = setTimeout(() => setVisible(true), 1500);

        return () => {
            observer.disconnect();
            clearTimeout(fallback);
        };
    }, []);

    return (
        <section id="skills" ref={container} className="max-w-(--content-width) mx-auto">
            <div className="h-4 border border-(--border-soft)"></div>

            <div className="border-x border-(--border-soft) py-17">
                <div className="max-w-3xl flex flex-col gap-12 mx-auto px-4 md:px-0">

                    {/* Heading */}
                    <div
                        className={`flex flex-col gap-4 transition-all duration-700 ease-out ${
                            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    >
                        <p className="text-sm tracking-[2px] uppercase font-medium">
                            Skills
                        </p>
                        <h2 className="text-xl md:text-3xl lg:text-[32px]">
                            Technologies I work with
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid gap-4 lg:grid-cols-2">
                        {skillGroups.map((group, groupIndex) => {
                            const GroupIcon = group.icon;

                            return (
                                <div
                                    key={group.title}
                                    style={{ transitionDelay: visible ? `${groupIndex * 100}ms` : "0ms" }}
                                    className={`rounded-[1.75rem] border border-(--border-soft) bg-white/80 p-5 shadow-[0_16px_45px_rgba(15,23,42,0.05)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(15,23,42,0.08)] ${
                                        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                >
                                    <div className="mb-4 flex items-start justify-between rounded-[1.25rem] p-1">
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-base font-semibold text-slate-900">{group.title}</h4>
                                                {GroupIcon && <GroupIcon className="text-slate-400 text-sm" />}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Skills Internal Chip Grid Layout */}
                                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                                        {group.skills.map((skill, skillIndex) => {
                                            const SkillIcon = skill.icon;
                                            return (
                                                <div
                                                    key={skill.name}
                                                    style={{
                                                        transitionDelay: visible
                                                            ? `${groupIndex * 100 + skillIndex * 40}ms`
                                                            : "0ms",
                                                    }}
                                                    className={`flex flex-col items-center gap-1.5 rounded-2xl border border-slate-100 bg-[#fcfaf7] p-3 text-center transition-all duration-500 ease-out ${
                                                        visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                                    }`}
                                                >
                                                    {SkillIcon && <SkillIcon className="text-2xl" color={skill.color} />}
                                                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;