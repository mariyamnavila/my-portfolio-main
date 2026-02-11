
const About = () => {
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
    return (
        <section className="max-w-(--content-width) mx-auto ">
            <div className="h-4 border border-(--border-soft)"></div>
            <div className="bg-[url('./assets/download.svg')] bg-cover bg-center bg-no-repeat border-x border-(--border-soft) py-17">
                <div class="max-w-2xl flex flex-col gap-9 sm:gap-12 mx-auto px-4 md:px-0">
                    <div class="flex flex-col gap-4">
                        <p class="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
                        <h2 class="text-xl md:text-3xl lg:text-[32px]">Hey there. I’m Mariyam — a web developer creating responsive, user-friendly web apps with React and Node.js, focused on clean code and smooth user experiences.</h2>
                        <h5 class="text-(--text-secondary)">Built projects including RecipeBook, Royal Ville, and LifeDrop.</h5>
                    </div>
                    <div class="flex flex-col gap-4">
                        <p class="text-sm uppercase font-medium">Services</p>
                        <div class="flex flex-wrap gap-2 sm:gap-3">
                            {
                                services.map(ser=><span class="inline-flex items-center justify-center border border-(--border-soft) text-xs font-medium w-fit whitespace-nowrap shrink-0 py-1.5 px-3 rounded-lg">{ser}</span>)
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;