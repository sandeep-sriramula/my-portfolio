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
  icon?: React.ReactNode;
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
    featured: true,
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="honeybeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <ellipse cx="50" cy="60" rx="25" ry="15" fill="url(#honeybeeGrad)" stroke="#92400E" strokeWidth="2"/>
        <ellipse cx="50" cy="55" rx="20" ry="12" fill="#FEF3C7"/>
        <rect x="45" y="45" width="10" height="3" fill="#92400E" rx="1"/>
        <rect x="45" y="50" width="10" height="3" fill="#92400E" rx="1"/>
        <rect x="45" y="55" width="10" height="3" fill="#92400E" rx="1"/>
        <ellipse cx="45" cy="40" rx="3" ry="4" fill="#1F2937"/>
        <ellipse cx="55" cy="40" rx="3" ry="4" fill="#1F2937"/>
        <path d="M25 35 Q35 25 45 35 Q40 30 35 35 Q30 30 25 35" fill="#60A5FA" opacity="0.7"/>
        <path d="M55 35 Q65 25 75 35 Q70 30 65 35 Q60 30 55 35" fill="#60A5FA" opacity="0.7"/>
        <circle cx="20" cy="20" r="8" fill="#34D399" opacity="0.6"/>
        <circle cx="80" cy="25" r="6" fill="#F472B6" opacity="0.6"/>
      </svg>
    )
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
    featured: true,
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" opacity="0.3" />
            <stop offset="100%" stopColor="#0891B2" opacity="0.6" />
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="60" height="60" rx="12" fill="url(#glassGrad)" stroke="#22D3EE" strokeWidth="2"/>
        <rect x="25" y="25" width="50" height="50" rx="8" fill="rgba(255,255,255,0.1)" stroke="#67E8F9" strokeWidth="1"/>
        <rect x="30" y="30" width="40" height="5" rx="2" fill="#22D3EE" opacity="0.7"/>
        <rect x="30" y="40" width="30" height="3" rx="1" fill="#67E8F9" opacity="0.5"/>
        <rect x="30" y="47" width="35" height="3" rx="1" fill="#67E8F9" opacity="0.5"/>
        <circle cx="65" cy="60" r="8" fill="rgba(34, 211, 238, 0.3)" stroke="#22D3EE" strokeWidth="1"/>
        <rect x="10" y="10" width="25" height="25" rx="6" fill="rgba(103, 232, 249, 0.2)" stroke="#67E8F9" strokeWidth="1"/>
        <rect x="70" y="75" width="20" height="20" rx="4" fill="rgba(34, 211, 238, 0.2)" stroke="#22D3EE" strokeWidth="1"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Hotel Master Management System",
    description: "Comprehensive hotel management desktop application with room reservations, guest registration, billing, check-in/check-out functionality, and real-time monitoring. Built with C# Windows Forms and Access database.",
    image: "/api/placeholder/600/400",
    technologies: ["C#", "Windows Forms", "OleDb", "Access Database", "MetroFramework"],
    githubUrl: "https://github.com/sandeep-sriramula/Hotel_Master",
    category: "Desktop Application",
    featured: true,
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="hotelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        <rect x="15" y="30" width="70" height="50" fill="url(#hotelGrad)" rx="3"/>
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="#60A5FA" strokeWidth="2" rx="4"/>
        <rect x="25" y="35" width="8" height="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1"/>
        <rect x="37" y="35" width="8" height="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1"/>
        <rect x="49" y="35" width="8" height="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1"/>
        <rect x="61" y="35" width="8" height="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1"/>
        <rect x="25" y="52" width="8" height="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1"/>
        <rect x="37" y="52" width="8" height="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1"/>
        <rect x="49" y="52" width="8" height="12" fill="#34D399" stroke="#059669" strokeWidth="1"/>
        <rect x="61" y="52" width="8" height="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1"/>
        <rect x="40" y="70" width="20" height="10" fill="#374151" rx="2"/>
        <circle cx="48" cy="75" r="1" fill="#F3F4F6"/>
        <path d="M30 15 L50 5 L70 15" stroke="#60A5FA" strokeWidth="2" fill="none"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "CricketChirps Temperature Calculator",
    description: "Android application that calculates temperature from cricket chirps using the scientific formula (chirps/3.0)+4. Features user-friendly interface for real-time temperature calculations based on cricket behavior patterns.",
    image: "/api/placeholder/600/400",
    technologies: ["Java", "Android", "XML"],
    githubUrl: "https://github.com/sandeep-sriramula/CricketChirps-Java",
    category: "Mobile Development",
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="cricketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#16A34A" />
          </linearGradient>
        </defs>
        <ellipse cx="50" cy="60" rx="20" ry="8" fill="url(#cricketGrad)"/>
        <ellipse cx="50" cy="55" rx="15" ry="6" fill="#15803D"/>
        <circle cx="45" cy="50" r="2" fill="#0F172A"/>
        <circle cx="55" cy="50" r="2" fill="#0F172A"/>
        <path d="M30 50 Q25 45 35 40" stroke="#16A34A" strokeWidth="2" fill="none"/>
        <path d="M70 50 Q75 45 65 40" stroke="#16A34A" strokeWidth="2" fill="none"/>
        <path d="M40 65 Q35 70 45 75" stroke="#16A34A" strokeWidth="2" fill="none"/>
        <path d="M60 65 Q65 70 55 75" stroke="#16A34A" strokeWidth="2" fill="none"/>
        <circle cx="80" cy="20" r="12" fill="#F59E0B" opacity="0.8"/>
        <text x="80" y="25" textAnchor="middle" fontSize="8" fill="#0F172A">°F</text>
      </svg>
    )
  },
  {
    id: 5,
    title: "RealTime Database Android App",
    description: "Android application demonstrating real-time database functionality with Firebase integration. Features live data synchronization, user input handling, and instant data updates across devices.",
    image: "/api/placeholder/600/400",
    technologies: ["Java", "Android", "Firebase", "Real-time Database"],
    githubUrl: "https://github.com/sandeep-sriramula/RealTime_db-Java",
    category: "Mobile Development",
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="firebaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        <rect x="30" y="20" width="40" height="60" fill="url(#firebaseGrad)" rx="8"/>
        <rect x="35" y="25" width="30" height="50" fill="#FEF3C7" rx="4"/>
        <rect x="38" y="30" width="24" height="3" fill="#16A34A" rx="1"/>
        <rect x="38" y="36" width="18" height="2" fill="#3B82F6" rx="1"/>
        <rect x="38" y="41" width="20" height="2" fill="#3B82F6" rx="1"/>
        <rect x="38" y="46" width="22" height="2" fill="#3B82F6" rx="1"/>
        <rect x="38" y="51" width="16" height="2" fill="#EF4444" rx="1"/>
        <circle cx="15" cy="30" r="8" fill="#34D399" opacity="0.7"/>
        <circle cx="85" cy="50" r="6" fill="#60A5FA" opacity="0.7"/>
        <path d="M20 40 Q25 35 30 40" stroke="#22C55E" strokeWidth="2" fill="none"/>
        <path d="M70 35 Q75 30 80 35" stroke="#3B82F6" strokeWidth="2" fill="none"/>
      </svg>
    )
  },
  {
    id: 6,
    title: "Sedit.in Image Gallery",
    description: "Interactive React-based image gallery website featuring modal views, hover effects, smooth animations, and responsive design. Showcases 3D concept art and digital artwork with professional presentation.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "JavaScript", "CSS3", "Create React App"],
    liveUrl: "https://sedit.in",
    githubUrl: "https://github.com/sandeep-sriramula/sedit.in",
    category: "Web Development",
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="galleryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="60" height="45" fill="url(#galleryGrad)" rx="4"/>
        <rect x="25" y="25" width="50" height="35" fill="#F3F4F6" rx="2"/>
        <rect x="30" y="30" width="18" height="12" fill="#06B6D4" rx="2"/>
        <rect x="52" y="30" width="18" height="12" fill="#F59E0B" rx="2"/>
        <rect x="30" y="46" width="18" height="12" fill="#EF4444" rx="2"/>
        <rect x="52" y="46" width="18" height="12" fill="#22C55E" rx="2"/>
        <circle cx="35" cy="35" r="2" fill="#FEF3C7"/>
        <circle cx="57" cy="35" r="2" fill="#FEF3C7"/>
        <circle cx="35" cy="51" r="2" fill="#FEF3C7"/>
        <circle cx="57" cy="51" r="2" fill="#FEF3C7"/>
        <circle cx="80" cy="75" r="8" fill="#F472B6" opacity="0.7"/>
        <rect x="75" y="70" width="10" height="6" fill="#FEF3C7" rx="1"/>
      </svg>
    )
  },
  {
    id: 7,
    title: "FRABA Android App",
    description: "Facial Recognition Aided Biometric Attendance system for Android. Features face detection and recognition technology to automatically mark attendance in Excel sheets, providing secure and efficient attendance management.",
    image: "/api/placeholder/600/400",
    technologies: ["Java", "Android", "Facial Recognition", "OpenCV", "Excel Integration"],
    githubUrl: "https://github.com/sandeep-sriramula/FRABA",
    category: "Mobile Development",
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="frabaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        <rect x="35" y="15" width="30" height="50" fill="url(#frabaGrad)" rx="8"/>
        <rect x="38" y="20" width="24" height="40" fill="#0F172A" rx="4"/>
        <circle cx="50" cy="35" r="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1"/>
        <circle cx="47" cy="32" r="1.5" fill="#0F172A"/>
        <circle cx="53" cy="32" r="1.5" fill="#0F172A"/>
        <path d="M48 37 Q50 39 52 37" stroke="#0F172A" strokeWidth="1" fill="none"/>
        <rect x="42" y="47" width="16" height="2" fill="#22C55E" rx="1"/>
        <rect x="42" y="51" width="12" height="1.5" fill="#22C55E" rx="0.5"/>
        <rect x="42" y="54" width="14" height="1.5" fill="#22C55E" rx="0.5"/>
        <circle cx="20" cy="30" r="6" fill="#22C55E" opacity="0.7"/>
        <path d="M17 27 L23 27 M17 30 L21 30 M17 33 L23 33" stroke="#FEF3C7" strokeWidth="1"/>
        <circle cx="80" cy="70" r="4" fill="#EF4444" opacity="0.7"/>
        <text x="80" y="75" textAnchor="middle" fontSize="6" fill="#FEF3C7">✓</text>
      </svg>
    )
  },
  {
    id: 8,
    title: "3D Portfolio Website (Current)",
    description: "Modern portfolio built with Astro, Three.js, and React showcasing work with stunning 3D particle animations, interactive elements, and responsive design. Features WebGL backgrounds and smooth scrolling.",
    image: "/api/placeholder/600/400",
    technologies: ["Astro", "Three.js", "TypeScript", "Tailwind CSS", "GSAP"],
    category: "Web Development",
    featured: true,
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="portfolioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
        </defs>
        <rect x="20" y="25" width="60" height="45" fill="url(#portfolioGrad)" rx="4" stroke="#22D3EE" strokeWidth="2"/>
        <rect x="25" y="30" width="50" height="35" fill="#0F172A" rx="2"/>
        <circle cx="30" cy="35" r="1" fill="#22D3EE"/>
        <circle cx="33" cy="35" r="1" fill="#F59E0B"/>
        <circle cx="36" cy="35" r="1" fill="#EF4444"/>
        <rect x="30" y="40" width="25" height="2" fill="#67E8F9" rx="1"/>
        <rect x="30" y="45" width="20" height="1.5" fill="#A5F3FC" rx="0.5"/>
        <rect x="30" y="49" width="22" height="1.5" fill="#A5F3FC" rx="0.5"/>
        <circle cx="60" cy="55" r="4" fill="#22D3EE" opacity="0.7"/>
        <circle cx="65" cy="50" r="2" fill="#67E8F9" opacity="0.5"/>
        <circle cx="55" cy="48" r="1.5" fill="#A5F3FC" opacity="0.8"/>
        <polygon points="15,15 25,5 35,15 25,25" fill="#8B5CF6" opacity="0.7"/>
        <polygon points="70,75 80,65 90,75 80,85" fill="#F472B6" opacity="0.7"/>
        <circle cx="10" cy="50" r="3" fill="#34D399" opacity="0.6"/>
        <circle cx="90" cy="30" r="2" fill="#F59E0B" opacity="0.6"/>
      </svg>
    )
  },
  {
    id: 9,
    title: "Jenkins Sample Project",
    description: "DevOps automation project demonstrating CI/CD pipeline implementation with Jenkins. Includes automated build, test, and deployment configurations for streamlined development workflows.",
    image: "/api/placeholder/600/400",
    technologies: ["Jenkins", "CI/CD", "DevOps", "Automation"],
    githubUrl: "https://github.com/sandeep-sriramula/jenkinssample",
    category: "DevOps",
    icon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16">
        <defs>
          <linearGradient id="jenkinsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="25" fill="url(#jenkinsGrad)"/>
        <circle cx="50" cy="50" r="18" fill="#065F46"/>
        <rect x="45" y="35" width="10" height="20" fill="#22C55E" rx="2"/>
        <rect x="40" y="58" width="20" height="4" fill="#16A34A" rx="2"/>
        <circle cx="44" cy="42" r="2" fill="#FEF3C7"/>
        <circle cx="56" cy="42" r="2" fill="#FEF3C7"/>
        <path d="M25 40 L35 30 L45 40 L35 50 Z" fill="#3B82F6" opacity="0.8"/>
        <path d="M55 30 L65 20 L75 30 L65 40 Z" fill="#F59E0B" opacity="0.8"/>
        <circle cx="20" cy="70" r="6" fill="#EF4444" opacity="0.7"/>
        <circle cx="80" cy="75" r="4" fill="#8B5CF6" opacity="0.7"/>
      </svg>
    )
  }
];

const categories = ["All", "Web Development", "Mobile Development", "Desktop Application", "AI/ML", "UI/UX", "DevOps"];

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto">
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
              <div className="aspect-video bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm flex items-center justify-center border-b border-gray-700/50">
                {project.icon || (
                  <svg viewBox="0 0 100 100" className="w-16 h-16 text-gray-400">
                    <rect x="20" y="20" width="60" height="60" rx="8" fill="currentColor" opacity="0.3"/>
                    <circle cx="35" cy="35" r="4" fill="currentColor"/>
                    <circle cx="65" cy="35" r="4" fill="currentColor"/>
                    <path d="M30 60 Q50 70 70 60" stroke="currentColor" strokeWidth="3" fill="none"/>
                  </svg>
                )}
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
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 bg-cyan-500/20 text-cyan-400 py-2 px-3 rounded text-sm hover:bg-cyan-500/30 transition-colors text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 border border-gray-600 text-gray-300 py-2 px-3 rounded text-sm hover:border-gray-500 transition-colors text-center"
                    >
                      GitHub
                    </a>
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
