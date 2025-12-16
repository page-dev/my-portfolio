import { Mail, Facebook, Github } from 'lucide-react';

function Hero() {
    return (
        <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-20 sm:py-0" id="home">
            
            <div className="flex flex-col lg:flex-row w-full items-center gap-8 lg:gap-12">
            
            {/* LEFT SIDE – Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Hello! I'm <br /> 
                    <span className="text-blue-800">Paul Labrador</span>
                </h1>
                <p className="font-mono mt-4 sm:mt-5 text-sm sm:text-base">
                    Hi! I am a 4th year software development student from 
                    <span className="font-bold"> Central Mindanao University.</span> 
                    I am a motivated frontend developer with a strong passion for web design.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-5">
                    <a href='my-resume.pdf' className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-blue-500 text-blue-500 font-semibold text-base sm:text-lg overflow-hidden transition-colors duration-300 hover:text-white font-mono">
                        <span className="relative z-10">Know more about me!</span>
                        <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    </a>
                    
                    <a href="mailto:pauljulius8709@gmail.com" target='_blank' className="group relative p-3 sm:p-4 rounded-xl border-2 border-red-500 text-red-500 overflow-hidden transition-colors duration-300 hover:text-white">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                        <div className="absolute inset-0 bg-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    </a>
                    
                    <a href="https://www.facebook.com/pauljulius.labrador" target='_blank' className="group relative p-3 sm:p-4 rounded-xl border-2 border-blue-600 text-blue-600 overflow-hidden transition-colors duration-300 hover:text-white">
                        <Facebook className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                        <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    </a>
                    
                    <a href="https://github.com/page-dev" target='_blank' className="group relative p-3 sm:p-4 rounded-xl border-2 border-gray-800 text-gray-800 overflow-hidden transition-colors duration-300 hover:text-white">
                        <Github className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                        <div className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    </a>
                </div>
            </div>

            {/* RIGHT SIDE – Image */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
                <img 
                    src="/my-pic.jpg" 
                    alt="Paul Portrait"
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
                />
            </div>

            </div>

        </section>
    );
}

export default Hero;