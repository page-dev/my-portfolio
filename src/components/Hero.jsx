import { Mail, Facebook, Github } from 'lucide-react';

function Hero() {
    return (
        <section className="h-screen w-full flex items-center justify-center px-20" id="home">
            
            <div className="flex w-full items-center gap-12">
            
            {/* LEFT SIDE — Text */}
            <div className="w-1/2 text-left">
                <h1 className="text-5xl font-bold">Hello! I'm <br /> <span className="text-blue-800">Paul Labrador</span></h1>
                <p className="font-mono mt-5">
                Hi! I am a 4th year software development student from 
                <span className="font-bold"> Central Mindanao University.</span> 
                I am a motivated frontend developer with a strong passion for web design.
                </p>
                <div className="flex items-center gap-4 mt-5">
                    <a href='my-resume.pdf' className="group relative px-8 py-4 rounded-xl border-2 border-blue-500 text-blue-500 font-semibold text-lg overflow-hidden transition-colors duration-300 hover:text-white font-mono">
                        <span className="relative z-10">Know more about me!</span>
                        <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    </a>
                    
                    <a href="mailto:pauljulius8709@gmail.com" target='_blank' className="group relative p-4 rounded-xl border-2 border-red-500 text-red-500 overflow-hidden transition-colors duration-300 hover:text-white">
                        <Mail className="w-6 h-6 relative z-10" />
                        <div className="absolute inset-0 bg-red-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    </a>
                    
                    <a href="https://www.facebook.com/pauljulius.labrador" target='_blank' className="group relative p-4 rounded-xl border-2 border-blue-600 text-blue-600 overflow-hidden transition-colors duration-300 hover:text-white">
                        <Facebook className="w-6 h-6 relative z-10" />
                        <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    </a>
                    
                    <a href="https://github.com/page-dev" target='_blank' className="group relative p-4 rounded-xl border-2 border-gray-800 text-gray-800 overflow-hidden transition-colors duration-300 hover:text-white">
                        <Github className="w-6 h-6 relative z-10" />
                        <div className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    </a>
                </div>
            </div>

            {/* RIGHT SIDE — Image */}
            <div className="w-1/2 flex justify-center">
                <img 
                src="/my-pic.jpg" 
                alt="Paul Portrait"
                className="w-80 h-80 object-cover rounded-full shadow-lg"
                />
            </div>

            </div>

        </section>
    );
}

export default Hero;