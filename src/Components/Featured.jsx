
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
]


const Featured = () => {
    return (
        <section className="max-w-(--content-width) mx-auto">
            <div className="h-4 border border-(--border-soft)"></div>

            <div className="border-x border-(--border-soft) ">
                <div className="max-w-2xl flex flex-col gap-12 mx-auto px-4 md:px-0 py-10">

                    {/* Heading */}
                    <div className=" flex flex-col md:flex-row gap-5 items-center justify-between">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                            Featured work
                        </p>
                        <button class=" rounded-md text-sm font-medium transition-all border border-(--border-soft) shadow-xs hover:bg-(--hover-soft) py-3 px-5" >Download Portfolio</button>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-(--border-soft)">
                    <a
                        href={projects[0].link} target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className=" flex flex-col gap-3.5 md:gap-5 p-3.5 md:p-6 border-b border-(--border-soft)">
                            <div className="overflow-hidden relative">
                                <img
                                    src={projects[0].image}
                                    alt={projects[0].name}
                                    className="project-image w-full h-56 object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-semibold text-lg">View Live</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 md:gap-2 px-2">
                                <h4 className="text-2xl font-medium">{projects[0].name}</h4>
                                <p className="text-(--text-secondary)">{projects[0].description}</p>
                            </div>
                        </div>
                    </a>
                    <a
                        href={projects[1].link} target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className=" flex flex-col gap-3.5 md:gap-5 p-3.5 md:p-6 border-l border-b border-(--border-soft)">
                            <div className="overflow-hidden relative">
                                <img
                                    src={projects[1].image}
                                    alt={projects[1].name}
                                    className="project-image w-full h-56 object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-semibold text-lg">View Live</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 md:gap-2 px-2">
                                <h4 className="text-2xl font-medium">{projects[1].name}</h4>
                                <p className="text-(--text-secondary)">{projects[1].description}</p>
                            </div>
                        </div>
                    </a>
                    <a
                        href={projects[2].link} target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className=" flex flex-col gap-3.5 md:gap-5 p-3.5 md:p-6 border-r border-(--border-soft)">
                            <div className="overflow-hidden relative">
                                <img
                                    src={projects[2].image}
                                    alt={projects[2].name}
                                    className="project-image w-full h-56 object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-semibold text-lg">View Live</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 md:gap-2 px-2 pb-3">
                                <h4 className="text-2xl font-medium">{projects[2].name}</h4>
                                <p className="text-(--text-secondary)">{projects[2].description}</p>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Featured;