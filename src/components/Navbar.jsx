import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Iterate through sections array directly
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

    // Call once on mount to set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Keep empty, but handleScroll uses sections from closure

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <div className="bg-white shadow-md rounded-b-2xl px-6 py-4">
          <div className="flex space-x-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative px-10 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-blue-800 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {section.label}
              {activeSection === section.id && (
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-400 rounded-full shadow-lg shadow-blue-500/50" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}