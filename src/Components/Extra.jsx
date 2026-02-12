import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Extra = () => {
    const container = useRef(null);

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        })
            .from(".extra-heading", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })
            .from(".repo-item", {
                y: 20,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6");

    }, { scope: container });

    return (
        <section ref={container} className="max-w-(--content-width) mx-auto">
            <div className="h-4 border border-(--border-soft)"></div>

            <div className="border-x border-b border-(--border-soft)">
                <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-start gap-5 md:gap-10 lg:gap-28 px-4 md:px-0 py-10">
                    <p className="extra-heading text-sm tracking-[2px] uppercase font-medium">
                        Github Repositories
                    </p>
                    <div className='flex flex-col gap-2.5'>
                        <a className='repo-item group' href="https://github.com/mariyamnavila/life-drop">
                            <div className='group flex flex-wrap items-center gap-2'>
                                <p className='text-xl font-medium'>Life Drop</p>
                                <GoArrowUpRight className='text-[28px] group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in' />
                            </div>
                        </a>
                        <a className='repo-item group' href="https://github.com/mariyamnavila/royal-ville-client">
                            <div className='group flex flex-wrap items-center gap-2'>
                                <p className='text-xl font-medium'>Royal Ville</p>
                                <GoArrowUpRight className='text-[28px] group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in' />
                            </div>
                        </a>
                        <a className='repo-item group' href="https://github.com/mariyamnavila/recipe-book-client">
                            <div className='group flex flex-wrap items-center gap-2'>
                                <p className='text-xl font-medium'>Recipe Book</p>
                                <GoArrowUpRight className='text-[28px] group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in' />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Extra;