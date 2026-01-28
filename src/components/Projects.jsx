import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

function Projects() {
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  
  const projects = [
    {
      title: "Healthier",
      description: "Calorie and Activity Tracker",
      longDescription: "A comprehensive mobile app for tracking daily calorie intake and physical activities. Features include food barcode scanning, meal logging, and exercise tracking.",
      images: [
        "../healthier.jpg",
        "../healthier2.jpg",
        "../healthier3.jpg"
      ],
      stack: [
        { name: "Flutter", icon: "../flutter.png" },
        { name: "Firebase", icon: "../firebase.png" }
      ],
      role: "Individual",
      liveUrl: "#",
      githubUrl: "#",
      status: {
        demo: "unavailable",
        code: "unavailable"
      }
    },
    {
      title: "Oceanify",
      description: "Ocean Storm Weather Application",
      longDescription: "A web application that provides real-time updates on ocean storms as well as alert systems for seafarers",
      images: [
        "../Oceanify1.png",
        "../Oceanify2.png",
        "../Oceanify3.png",
        "../Oceanify4.png"
      ],
      stack: [
        { name: "React", icon: "../react.png" },
        { name: "Laravel", icon: "../Laravel.svg.png" },
        { name: "Supabase", icon: "../supabase.png" }
      ],
      role: "Database Programmer",
      liveUrl: "https://l.messenger.com/l.php?u=https%3A%2F%2Foceanify-official-page-b9p7.vercel.app%2F&h=AT2A_KUE5BNVZgW5WCMizn1-SUFQAFYzxK13YZKWImWbdB_Ot7_oKzy_rNn8TCsK6TwFfgCHuL7bP-x84i1Fr-1mrvodq9PxcJJBm8fy78oR0NH7xDjqJE0Td6g1UPG2qSIwyLShRhvGCvE",
      githubUrl: "https://github.com/Ji-ru/Oceanify",
      status: {
        demo: "available",
        code: "available"
      }
    },
    {
      title: "Organization Fee Collection & Financial Tracking System",
      description: "",
      longDescription: "A web application that tracks fee collection and finances in an university organization. (Ongoing)",
      images: [
        "../not-available.png"
      ],
      stack: [
        { name: "React", icon: "../react.png" },
        { name: "Go", icon: "../go.png" },
        { name: "PostgreSQL", icon: "../Postgresql_elephant.svg" }
      ],
      role: "Frontend Developer",
      liveUrl: "https://l.messenger.com/l.php?u=https%3A%2F%2Foceanify-official-page-b9p7.vercel.app%2F&h=AT2A_KUE5BNVZgW5WCMizn1-SUFQAFYzxK13YZKWImWbdB_Ot7_oKzy_rNn8TCsK6TwFfgCHuL7bP-x84i1Fr-1mrvodq9PxcJJBm8fy78oR0NH7xDjqJE0Td6g1UPG2qSIwyLShRhvGCvE",
      githubUrl: "https://github.com/Ji-ru/Oceanify",
      status: {
        demo: "unavailable",
        code: "unavailable"
      }
    }
  ];

  const nextImage = (projectIdx) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectIdx]: ((prev[projectIdx] || 0) + 1) % projects[projectIdx].images.length
    }));
  };

  const prevImage = (projectIdx) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectIdx]: ((prev[projectIdx] || 0) - 1 + projects[projectIdx].images.length) % projects[projectIdx].images.length
    }));
  };

  return (
    <section className="min-h-screen py-24 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-blue-800">
            Projects
          </h1>
          <p className="text-gray-600 text-lg">
            Showcasing my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Carousel */}
              <div className="relative bg-gray-100 h-80 overflow-hidden">
                <img 
                  src={project.images[currentImageIndices[idx] || 0]} 
                  alt={`${project.title} screenshot ${(currentImageIndices[idx] || 0) + 1}`}
                  className="w-full h-full object-contain"
                />
                
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(idx)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-800" />
                    </button>
                    <button
                      onClick={() => nextImage(idx)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-800" />
                    </button>
                  </>
                )}
                
                {/* Image Indicators */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={() => setCurrentImageIndices(prev => ({ ...prev, [idx]: imgIdx }))}
                        className={`w-2 h-2 rounded-full transition-all ${
                          imgIdx === (currentImageIndices[idx] || 0)
                            ? 'bg-white w-6' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to image ${imgIdx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-1 font-medium">{project.description}</p>
                <p className="text-gray-500 text-sm mb-4">{project.longDescription}</p>

                {/* Role */}
                <div>
                    <p className='text-gray-500 text-sm mb-4'>Role: {project.role}</p>
                </div>
                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIdx) => (
                      <div 
                        key={techIdx}
                        className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-full hover:bg-gray-100 transition"
                      >
                        <img 
                          src={tech.icon} 
                          alt={`${tech.name} icon`}
                          className="w-5 h-5 object-contain" 
                        />
                        <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.status.demo === "available" ? project.liveUrl : undefined}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition ${
                      project.status.demo === "available"
                        ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    onClick={(e) => project.status.demo === "unavailable" && e.preventDefault()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                  <a
                    href={project.status.code === "available" ? project.githubUrl : undefined}
                    className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition ${
                      project.status.code === "available"
                        ? "border border-gray-300 hover:border-gray-400 hover:bg-gray-50 cursor-pointer"
                        : "border border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                    onClick={(e) => project.status.code === "unavailable" && e.preventDefault()}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;