import { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const skills: Skill[] = [
  // AI/ML & Python
  { name: 'Python', level: 90, category: 'AI/Backend', color: '#3776AB' },
  { name: 'FastAPI', level: 85, category: 'AI/Backend', color: '#009688' },
  { name: 'AI/ML', level: 88, category: 'AI/Backend', color: '#FF6F00' },
  { name: 'OpenAI APIs', level: 85, category: 'AI/Backend', color: '#412991' },
  { name: 'Google Gemini', level: 82, category: 'AI/Backend', color: '#4285F4' },
  
  // Frontend Technologies
  { name: 'React', level: 92, category: 'Frontend', color: '#61DAFB' },
  { name: 'TypeScript', level: 90, category: 'Frontend', color: '#3178C6' },
  { name: 'JavaScript', level: 95, category: 'Frontend', color: '#F7DF1E' },
  { name: 'Three.js', level: 88, category: 'Frontend', color: '#000000' },
  { name: 'Astro', level: 85, category: 'Frontend', color: '#FF5D01' },
  { name: 'Vite', level: 87, category: 'Frontend', color: '#646CFF' },
  
  // Styling & Animation
  { name: 'Tailwind CSS', level: 95, category: 'Styling', color: '#06B6D4' },
  { name: 'Framer Motion', level: 88, category: 'Animation', color: '#0055FF' },
  { name: 'GSAP', level: 82, category: 'Animation', color: '#88CE02' },
  { name: 'CSS3', level: 90, category: 'Styling', color: '#1572B6' },
  
  // Mobile Development
  { name: 'Android', level: 85, category: 'Mobile', color: '#3DDC84' },
  { name: 'Java', level: 88, category: 'Mobile', color: '#ED8B00' },
  { name: 'Firebase', level: 80, category: 'Mobile', color: '#FFCA28' },
  
  // Desktop Development
  { name: 'C#', level: 83, category: 'Desktop', color: '#239120' },
  { name: 'Windows Forms', level: 80, category: 'Desktop', color: '#0078D4' },
  { name: '.NET', level: 82, category: 'Desktop', color: '#512BD4' },
  
  // DevOps & Tools
  { name: 'Jenkins', level: 75, category: 'DevOps', color: '#D33833' },
  { name: 'CI/CD', level: 78, category: 'DevOps', color: '#326CE5' },
  { name: 'Git', level: 90, category: 'DevOps', color: '#F05032' },
];

const categories = ['All', 'Frontend', 'Backend', 'WebGL', 'Framework', 'Styling', 'Animation'];

export default function SkillsVisualization() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm ${
              selectedCategory === category
                ? 'bg-cyan-500 text-black border-cyan-500 shadow-lg shadow-cyan-500/25'
                : 'border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="group relative"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-3 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-white truncate">{skill.name}</h3>
                <div 
                  className="w-3 h-3 rounded-full border border-white/20 flex-shrink-0 ml-2"
                  style={{ backgroundColor: skill.color }}
                />
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span className="truncate">{skill.category}</span>
                  <span className="ml-1">{skill.level}%</span>
                </div>
                
                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
                  />
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg transition-opacity duration-300 ${
                hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>

            {/* Floating Level Indicator */}
            <motion.div
              className={`absolute -top-1 -right-1 bg-cyan-500 text-black text-xs font-bold px-1.5 py-0.5 rounded-full transition-all duration-300 ${
                hoveredSkill === skill.name ? 'scale-110 shadow-lg shadow-cyan-500/50' : 'scale-100'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 500, damping: 30 }}
            >
              {skill.level}%
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Skills Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-cyan-400">{skills.length}</div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">
                {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
              </div>
              <div className="text-gray-400">Avg. Proficiency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">
                {new Set(skills.map(skill => skill.category)).size}
              </div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
