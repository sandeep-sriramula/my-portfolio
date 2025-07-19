import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Honeybee AI Banking Assistant",
    description: "Full-stack AI-powered banking assistant with natural language processing for financial data analysis. Features React frontend, FastAPI backend, Google Gemini integration, and real-time chat with typewriter effects.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "FastAPI", "Python", "AI/ML", "Google Gemini", "Tailwind CSS"],
    liveUrl: "https://honeybee-ai.netlify.app",
    githubUrl: "https://github.com/sandeep-sriramula/honeybee-ai",
    category: "AI/ML",
    featured: true
  },
  {
    id: 2,
    title: "Glass UI Components Library",
    description: "Modern glassmorphism UI component library built with React, TypeScript, and Framer Motion. Features 15+ components with beautiful glass effects, smooth animations, and mobile optimization.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Vite"],
    liveUrl: "https://glass-ui-realistic.netlify.app",
    githubUrl: "https://github.com/sandeep-sriramula/Glass-ui",
    category: "UI/UX",
    featured: true
  },
  {
    id: 3,
    title: "Hotel Master Management System",
    description: "Comprehensive hotel management desktop application with room reservations, guest registration, billing, check-in/check-out functionality, and real-time monitoring. Built with C# Windows Forms and Access database.",
    image: "/api/placeholder/600/400",
    technologies: ["C#", "Windows Forms", "OleDb", "Access Database", "MetroFramework"],
    githubUrl: "https://github.com/sandeep-sriramula/Hotel_Master",
    category: "Desktop Application",
    featured: true
  },
  {
    id: 4,
    title: "CricketChirps Temperature Calculator",
    description: "Android application that calculates temperature from cricket chirps using the scientific formula (chirps/3.0)+4. Features user-friendly interface for real-time temperature calculations based on cricket behavior patterns.",
    image: "/api/placeholder/600/400",
    technologies: ["Java", "Android", "XML"],
    githubUrl: "https://github.com/sandeep-sriramula/CricketChirps-Java",
    category: "Mobile Development"
  },
  {
    id: 5,
    title: "RealTime Database Android App",
    description: "Android application demonstrating real-time database functionality with Firebase integration. Features live data synchronization, user input handling, and instant data updates across devices.",
    image: "/api/placeholder/600/400",
    technologies: ["Java", "Android", "Firebase", "Real-time Database"],
    githubUrl: "https://github.com/sandeep-sriramula/RealTime_db-Java",
    category: "Mobile Development"
  },
  {
    id: 6,
    title: "Sedit.in Image Gallery",
    description: "Interactive React-based image gallery website featuring modal views, hover effects, smooth animations, and responsive design. Showcases 3D concept art and digital artwork with professional presentation.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "JavaScript", "CSS3", "Create React App"],
    liveUrl: "https://sedit.in",
    githubUrl: "https://github.com/sandeep-sriramula/sedit.in",
    category: "Web Development"
  },
  {
    id: 7,
    title: "FRABA Android App",
    description: "Android application with splash screen animations and smooth UI transitions. Features fade-out animations, progress indicators, and custom visual effects built with Java and Android SDK.",
    image: "/api/placeholder/600/400",
    technologies: ["Java", "Android", "Animation APIs", "XML"],
    githubUrl: "https://github.com/sandeep-sriramula/FRABA",
    category: "Mobile Development"
  },
  {
    id: 8,
    title: "3D Portfolio Website (Current)",
    description: "Modern portfolio built with Astro, Three.js, and React showcasing work with stunning 3D particle animations, interactive elements, and responsive design. Features WebGL backgrounds and smooth scrolling.",
    image: "/api/placeholder/600/400",
    technologies: ["Astro", "Three.js", "TypeScript", "Tailwind CSS", "GSAP"],
    category: "Web Development",
    featured: true
  },
  {
    id: 9,
    title: "Jenkins Sample Project",
    description: "DevOps automation project demonstrating CI/CD pipeline implementation with Jenkins. Includes automated build, test, and deployment configurations for streamlined development workflows.",
    image: "/api/placeholder/600/400",
    technologies: ["Jenkins", "CI/CD", "DevOps", "Automation"],
    githubUrl: "https://github.com/sandeep-sriramula/jenkinssample",
    category: "DevOps"
  }
];

const categories = ["All", "Web Development", "Mobile Development", "Desktop Application", "AI/ML", "UI/UX", "DevOps"];

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Featured Projects */}
      <div className="mb-16">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
                🚀
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-600 hover:border-cyan-500 text-white py-2 px-4 rounded-lg transition-colors text-center"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full border transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-cyan-500 text-black border-cyan-500 shadow-lg shadow-cyan-500/25'
                : 'border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* All Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-4xl">
                🎨
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <button className="flex-1 bg-cyan-500/20 text-cyan-400 py-2 px-3 rounded text-sm hover:bg-cyan-500/30 transition-colors">
                      Live
                    </button>
                  )}
                  {project.githubUrl && (
                    <button className="flex-1 border border-gray-600 text-gray-300 py-2 px-3 rounded text-sm hover:border-gray-500 transition-colors">
                      Code
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl mb-6 flex items-center justify-center text-8xl">
                  🚀
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-2 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                    >
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-600 hover:border-cyan-500 text-white py-3 px-6 rounded-lg transition-colors text-center"
                    >
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
