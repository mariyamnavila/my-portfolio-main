import { useState, useEffect, useRef, useCallback } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import monogram from "../assets/my.jpg";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);
    const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
    const linkRefs = useRef({});

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 24);

            const sections = navLinks.map((link) => link.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 140) {
                    setActive(sections[i]);
                    return;
                }
            }
            setActive("");
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const updateIndicator = useCallback(() => {
        const el = linkRefs.current[active];
        const parent = el?.closest("ul");
        if (el && parent) {
            setIndicator({
                left: el.offsetLeft,
                width: el.offsetWidth,
                opacity: 1,
            });
        } else {
            setIndicator((prev) => ({ ...prev, opacity: 0 }));
        }
    }, [active]);

    useEffect(() => {
        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [updateIndicator]);

    const handleClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    const handleBrandClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActive("");
    };

    return (
        <>
            <nav
                className={`fixed top-3 left-1/2 z-50 flex w-[min(92vw,56rem)] -translate-x-1/2 items-center justify-between rounded-full border px-3 py-2.5 shadow-[0_12px_40px_rgba(15,23,42,0.07)] backdrop-blur-xl animate-[nav-slide-in_0.7s_ease-out_0.15s_both] transition-all duration-500 ease-out md:px-4 ${scrolled
                    ? "border-(--border-soft) bg-white/80"
                    : "border-white/70 bg-white/70"
                    }`}
            >
                <a
                    href="#"
                    onClick={handleBrandClick}
                    className="flex items-center gap-3 rounded-full pr-2 transition-transform duration-300 hover:scale-[1.01]"
                >
                    <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-slate-200/80 bg-[#fdf8ee] shadow-sm">
                        <img src={monogram} alt="Mariyam profile" className="h-full w-full object-cover" />
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold tracking-[0.2em] text-slate-900 uppercase">Mariyam</p>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-(--text-secondary)">Developer</p>
                    </div>
                </a>

                <div className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-[#fcfaf7] p-1 md:flex">
                    <ul className="relative flex items-center gap-0.5">
                        <span
                            className="absolute top-0 z-0 rounded-full border border-slate-100 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out"
                            style={{
                                left: `${indicator.left}px`,
                                width: `${indicator.width}px`,
                                height: "100%",
                                opacity: indicator.opacity,
                            }}
                        />
                        {navLinks.map((link) => {
                            const isCurrent = active === link.href.slice(1);
                            return (
                                <li
                                    key={link.href}
                                    ref={(el) => { linkRefs.current[link.href.slice(1)] = el; }}
                                    className="relative"
                                >
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleClick(e, link.href)}
                                        className={`relative z-10 block rounded-full px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors duration-300 ${isCurrent
                                            ? "text-slate-900"
                                            : "text-slate-500 hover:text-slate-900"
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="flex items-center gap-2">
                    <a
                        href="#contact"
                        onClick={(e) => handleClick(e, "#contact")}
                        className="hidden items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition-all duration-300 hover:bg-[#a58fdf] md:inline-flex"
                    >
                        Let&apos;s Talk
                        <FiArrowRight className="text-sm" />
                    </a>

                    <button
                        type="button"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-700 shadow-sm transition-all duration-200 hover:bg-(--hover-soft) md:hidden"
                    >
                        {mobileOpen ? <FiX className="text-base" /> : <FiMenu className="text-base" />}
                    </button>
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-40 flex flex-col justify-between bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(253,247,238,0.95))] px-6 py-6 backdrop-blur-xl transition-all duration-500 md:hidden ${mobileOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-3 opacity-0"
                    }`}
            >
                <div className="mt-20 flex flex-col gap-5">
                    <div className="flex items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">Navigation</p>
                            <p className="text-[11px] uppercase tracking-[0.24em] text-(--text-secondary)">Explore the portfolio</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setMobileOpen(false)}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-700"
                            aria-label="Close navigation menu"
                        >
                            <FiX />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-2">
                        {navLinks.map((link, index) => {
                            const isCurrent = active === link.href.slice(1);
                            return (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleClick(e, link.href)}
                                        className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-lg font-semibold transition-all duration-300 ${isCurrent
                                            ? "border-[#e9ddff] bg-[#f8f2ff] text-slate-900"
                                            : "border-transparent bg-white/70 text-slate-500 hover:border-slate-200 hover:text-slate-900"
                                            }`}
                                        style={{ transitionDelay: `${index * 70}ms` }}
                                    >
                                        <span>{link.label}</span>
                                        <FiArrowRight className="text-sm" />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">Open for freelance and collaboration projects.</p>
                    <a
                        href="#contact"
                        onClick={(e) => handleClick(e, "#contact")}
                        className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#a58fdf] px-4 py-2 text-sm font-semibold text-white"
                    >
                        Start a conversation
                        <FiArrowRight />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
