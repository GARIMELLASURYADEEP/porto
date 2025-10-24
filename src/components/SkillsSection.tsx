import { motion } from 'motion/react';
import ParticleBackground from './ParticleBackground';
import { 
  Code2, Database, Palette, Cpu, Globe, Server,
  Boxes, Wand2, Layout, Terminal, FileCode, Wrench,
  GitBranch, Cloud, Smartphone, Zap
} from 'lucide-react';

interface SkillsSectionProps {
  setActiveSection: (section: string) => void;
}

export default function SkillsSection({ setActiveSection }: SkillsSectionProps) {
  const skills = [
    { name: 'HTML', icon: FileCode, category: 'Frontend', color: '#00aaff' },
    { name: 'CSS', icon: Wand2, category: 'Frontend', color: '#00aaff' },
    { name: 'JavaScript', icon: Code2, category: 'Frontend', color: '#00aaff' },
    { name: 'React', icon: Layout, category: 'Frontend', color: '#00aaff' },
    { name: 'Tailwind', icon: Wand2, category: 'Frontend', color: '#00aaff' },
    
    { name: 'Node.js', icon: Server, category: 'Backend', color: '#ae00ff' },
    { name: 'Django', icon: Globe, category: 'Backend', color: '#ae00ff' },
    { name: 'Flask', icon: Server, category: 'Backend', color: '#ae00ff' },
    { name: 'MongoDB', icon: Database, category: 'Backend', color: '#ae00ff' },
    { name: 'SQL', icon: Database, category: 'Backend', color: '#ae00ff' },
    
    { name: 'Godot', icon: Boxes, category: 'Game Dev', color: '#00fff0' },
    { name: 'Unity', icon: Boxes, category: 'Game Dev', color: '#00fff0' },
    { name: 'Blender', icon: Palette, category: 'Game Dev', color: '#00fff0' },
    { name: 'Pygame', icon: Boxes, category: 'Game Dev', color: '#00fff0' },
    
    { name: 'Python', icon: Terminal, category: 'Other', color: '#FFD700' },
    { name: 'Git', icon: GitBranch, category: 'Other', color: '#FFD700' },
    { name: 'APIs', icon: Cloud, category: 'Other', color: '#FFD700' },
    { name: 'AI/ML', icon: Cpu, category: 'Other', color: '#FFD700' },
  ];

  const categories = ['Frontend', 'Backend', 'Game Dev', 'Other'];

  return (
    <div className="relative min-h-screen px-4 py-24">
      <ParticleBackground type="grid" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl mb-4 bg-gradient-to-r from-[#00aaff] via-[#ae00ff] to-[#00fff0] bg-clip-text text-transparent">
            SKILLS & EXPERTISE
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive arsenal of modern development tools and technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ 
                scale: 1.15,
                rotateY: 180,
                z: 50,
              }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-70"
                style={{ backgroundColor: skill.color }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              />

              <div 
                className="relative bg-black/60 backdrop-blur-sm border-2 rounded-lg p-6 aspect-square flex flex-col items-center justify-center gap-3 transition-all duration-300"
                style={{ borderColor: `${skill.color}40` }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon size={36} style={{ color: skill.color }} />
                </motion.div>
                
                <span className="text-white text-sm text-center">
                  {skill.name}
                </span>
                
                <span 
                  className="text-xs opacity-70"
                  style={{ color: skill.color }}
                >
                  {skill.category}
                </span>
              </div>

              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    backgroundColor: skill.color,
                    top: `${i * 25}%`,
                    right: -5,
                  }}
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {categories.map((category, index) => {
            const categorySkills = skills.filter(s => s.category === category);
            const color = categorySkills[0]?.color || '#00fff0';
            
            return (
              <motion.div
                key={category}
                className="bg-black/40 backdrop-blur-sm border rounded-lg p-6"
                style={{ borderColor: `${color}40` }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl mb-4" style={{ color }}>
                  {category}
                </h3>
                
                <div className="space-y-2">
                  {categorySkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-2 text-gray-400 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + i * 0.05 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: color }}
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                      {skill.name}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-4 h-1 rounded-full"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.5 + index * 0.1, duration: 1 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.p
            className="text-[#00fff0] font-mono text-lg"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            [ Constantly evolving · Always learning ]
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
