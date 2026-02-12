import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import bannerImg from '../assets/banner-bg-img.png';
import my from '../assets/my.jpg';
import { CiLocationOn } from "react-icons/ci";
import { TbMailFilled } from 'react-icons/tb';
import { AiFillThunderbolt } from 'react-icons/ai';
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {

    const bannerRef = useRef(null);
    const profileRef = useRef(null);
    const textRef = useRef(null);
    const iconsRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(bannerRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        })
            .from(profileRef.current, {
                y: -80,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)"
            }, "-=0.6")
            .from(textRef.current, {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.6")
            .from(iconsRef.current.children, {
                scale: 0,
                opacity: 0,
                stagger: 0.15,
                duration: 0.5,
                ease: "back.out(1.7)"
            }, "-=0.5");

    }, { scope: bannerRef });

    return (
        <section className="max-w-(--content-width) mx-auto px-5 lg:px-0">
            <img ref={bannerRef} className='w-(--content-width) h-70 object-cover mx-auto' src={bannerImg} alt="" />
            <div className='border-x border-(--border-soft)'>
                <div className='max-w-2xl mx-auto relative'>
                    <div>
                        <img ref={profileRef} src={my} alt="" className='absolute -top-20 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 rounded-full border-5 border-white w-38' />
                    </div>
                    <div ref={textRef} className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='space-y-2 pt-24 text-center md:text-left pb-10 md:pb-14'>
                            <h3 className='text-2xl md:text-3xl '>Bibi Mariyam</h3>
                            <p className='text-[#a58fdf] font-medium'>Full-stack Developer</p>
                            <div className='flex items-center justify-center md:justify-start'>
                                <CiLocationOn className='text-xl mr-1' />
                                Chattogram, Bangladesh
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-center md:justify-start items-center pb-10 space-y-4 md:space-y-0'>
                            <div ref={iconsRef} className='flex gap-2'>
                                <div className='border border-(--border-soft) hover:bg-(--hover-soft) p-3 rounded-full'>
                                    <a href="https://github.com/mariyamnavila" >
                                        <FaGithub className='text-xl' />
                                    </a>
                                </div>
                                <div className='border border-(--border-soft) hover:bg-(--hover-soft) p-3 rounded-full'>
                                    <a href="https://www.linkedin.com/in/bibimariyam/" >
                                        <FaLinkedinIn className='text-xl' />
                                    </a>
                                </div>
                                <div className='border border-(--border-soft) hover:bg-(--hover-soft) p-3 rounded-full'>
                                    <a href="mailto:bibimariyamnavila@gmail.com?subject=Hello&body=Hi%20Mariyam!" >
                                        <TbMailFilled className='text-xl' />
                                    </a>
                                </div>
                            </div>
                            <div className=' ml-2'>
                                <a href="mailto:bibimariyamnavila@gmail.com">
                                    <div className="relative px-5 py-3 rounded-full text-white font-medium bg-[#a58fdf] group" >
                                        <span className="absolute inset-0 rounded-full bg-black/90 group-hover:bg-transparent transition duration-300 flex items-center justify-center m-0.5">
                                            <AiFillThunderbolt className='mr-2' />  Get in touch
                                        </span>
                                        <span className="relative flex items-center justify-center"><AiFillThunderbolt className='mr-2' /> Get in touch</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;