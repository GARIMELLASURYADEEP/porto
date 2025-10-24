import { motion } from 'motion/react';
import ParticleBackground from './ParticleBackground';
import { 
  Code2, Database, Palette, Cpu, Globe, 
  Boxes, Wand2, Server, Layout, Terminal 
} from 'lucide-react';

interface AboutSectionProps {
  setActiveSection: (section: string) => void;
}

export default function AboutSection({ setActiveSection }: AboutSectionProps) {
  const skills = [
    { name: 'Godot', icon: Boxes, color: '#00aaff' },
    { name: 'Unity', icon: Boxes, color: '#ae00ff' },
    { name: 'Blender', icon: Palette, color: '#00fff0' },
    { name: 'Python', icon: Code2, color: '#00aaff' },
    { name: 'Node.js', icon: Server, color: '#ae00ff' },
    { name: 'React', icon: Layout, color: '#00fff0' },
    { name: 'TailwindCSS', icon: Wand2, color: '#00aaff' },
    { name: 'MongoDB', icon: Database, color: '#ae00ff' },
    { name: 'SQL', icon: Database, color: '#00fff0' },
    { name: 'Django', icon: Globe, color: '#00aaff' },
    { name: 'Flask', icon: Server, color: '#ae00ff' },
    { name: 'AI/ML', icon: Cpu, color: '#00fff0' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-24">
      <ParticleBackground type="matrix" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl md:text-8xl text-center mb-16 bg-gradient-to-r from-[#00aaff] to-[#00fff0] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ABOUT ME
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00aaff] to-[#ae00ff] rounded-lg blur-xl opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative bg-black/40 backdrop-blur-sm border border-[#00fff0]/30 rounded-lg p-8">
                <div className="w-48 h-48 mx-auto mb-6 relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00aaff] via-[#ae00ff] to-[#00fff0]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="absolute inset-2 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                    <span className="text-6xl bg-gradient-to-r from-[#00aaff] to-[#00fff0] bg-clip-text text-transparent">
                      S
                    </span>
                  </div>
                </div>

                <ParticleBackground type="matrix" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black/40 backdrop-blur-sm border border-[#00aaff]/30 rounded-lg p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm <span className="text-[#00fff0]">Surya</span>, a CSE student, a dedicated 
                <span className="text-[#00aaff]"> full stack developer</span>, and a 
                <span className="text-[#ae00ff]"> professional game developer</span>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I love creating immersive digital experiences — from interactive web tools to full-fledged games. 
                I'm passionate about retro and classic-style games, blending nostalgia with modern gameplay.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm an explorer of new technologies, tools, and trends in software and AI innovation. 
                Every project is an opportunity to push boundaries and create something extraordinary.
              </p>

              <motion.div
                className="mt-6 p-4 border-l-4 border-[#00fff0] bg-[#00fff0]/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-[#00fff0] font-mono">
                  "Innovation distinguishes between a leader and a follower."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-3xl text-center mb-8 text-[#00fff0]">TECH STACK</h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-lg blur-lg"
                  style={{ backgroundColor: skill.color }}
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                />
                
                <div className="relative bg-black/60 backdrop-blur-sm border-2 rounded-lg p-6 flex flex-col items-center gap-2 transition-colors duration-300"
                  style={{ borderColor: `${skill.color}40` }}
                >
                  <skill.icon size={32} style={{ color: skill.color }} />
                  <span className="text-xs text-gray-400">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
