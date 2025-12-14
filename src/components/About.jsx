function About(){

    const techs = 
        {
            front: [
                { src: "../flutter.png", name: "Flutter" },
                { src: "../react.png", name: "React" }
            ],
            back: [
                { src: "Laravel.svg.png", name: "Laravel" },
                { src: "java.png", name: "Java" },
                { src: "PHP-logo.svg.png", name: "PHP" }
            ],
            tools: [
                { src: "firebase.png", name: "Firebase" },
                { src: "supabase.png", name: "Supabase" },
                { src: "net.png", name: ".NET" },
                { src: "MySQL Logo.png", name: "MySQL" },
                { src: "Postgresql_elephant.svg", name: "PostgreSQL" },
                { src: "github.png", name: "GitHub" }
            ]
        };

    const TechPill = ({ src, name }) => (
        <div className="relative group">
            <div className="px-4 py-2 rounded-full flex items-center gap-2 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl cursor-pointer">
                <img src={`../${src}`} className="w-8 h-8 object-contain" alt={name} />
            </div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {name}
            </div>
        </div>
    );

    return(
        <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8" id="about">
                <h1 className="text-center font-bold text-4xl sm:text-5xl font-bold mb-8 text-blue-800 bg-clip-text">About Me</h1>

            <div className="flex-row flex text-right items-center gap-12">
                <div className="flex w-1/2">
                    <img src="../my-pic2.jpg" alt="" className="w-80 h-80 object-cover object-[4%-0%] rounded-full shadow-lg ml-10"/>
                </div>

                <div className="flex w-1/2 text-left flex-col ml-8">
                    <h1 className="font-bold text-4xl mb-3">Frontend Developer</h1>
                    <p className="font-mono">I am a developer defined by curiosity and consistency. Whether doing complex coursework or building personal applications from scratch, I am constantly expanding my technical toolkit. 
                        Here is the stack I've leveraged to turn concepts into functional code:
                    </p>
                    <div className="mt-4">
                        <h2 className="font-semibold text-lg mb-2">Frontend Development</h2>
                        <div className="flex flex-wrap gap-3">
                            {techs.front.map((item, idx) => (
                            <TechPill key={idx} src={item.src} name={item.name} />
                            ))}
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-semibold text-lg mb-2">Backend Development</h2>
                        <div className="flex flex-wrap gap-3">
                            {techs.back.map((item, idx) => (
                            <TechPill key={idx} src={item.src} name={item.name} />
                            ))}
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-semibold text-lg mb-2">Tools & Other Technologies</h2>
                        <div className="flex flex-wrap gap-3">
                            {techs.tools.map((item, idx) => (
                            <TechPill key={idx} src={item.src} name={item.name} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;