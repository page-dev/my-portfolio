import { useState, useEffect } from 'react';
import { Home, User, Briefcase } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-0">
      <div className="bg-white shadow-md rounded-b-2xl px-2 sm:px-4 md:px-6 py-3 sm:py-4">
        <div className="flex space-x-1">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-3 sm:px-6 md:px-10 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base ${
                  activeSection === section.id
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={16} className="sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{section.label}</span>
                {activeSection === section.id && (
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-400 rounded-full shadow-lg shadow-blue-500/50" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}