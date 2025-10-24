import { motion } from 'motion/react';
import ParticleBackground from './ParticleBackground';
import ProjectCard from './ProjectCard';
import { Gamepad2, Ghost } from 'lucide-react';

interface GameDevSectionProps {
  setActiveSection: (section: string) => void;
}

export default function GameDevSection({ setActiveSection }: GameDevSectionProps) {
  const projects = [
    {
      title: 'Idle Clicker Tycoon',
      description: '2D Tycoon Game built with Pygame featuring retro pixel art aesthetics, incremental progression system, and multiple upgrade paths. Collect coins, build your empire!',
      icon: <Gamepad2 size={40} className="text-[#ae00ff]" />,
      color: '#ae00ff',
    },
    {
      title: 'Claustrophobia: The One Way Exit',
      description: 'Horror survival game built using Godot & Blender. Navigate through dark corridors, solve puzzles, and escape the nightmare. Features atmospheric lighting and sound design.',
      icon: <Ghost size={40} className="text-[#00fff0]" />,
      color: '#00fff0',
    },
  ];

  return (
    <div className="relative min-h-screen px-4 py-24 overflow-hidden">
      <ParticleBackground type="gaming" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#ae00ff]/20 via-transparent to-[#00fff0]/20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              textShadow: [
                '0 0 20px #ae00ff',
                '0 0 40px #00fff0',
                '0 0 20px #ae00ff',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h2 className="text-6xl md:text-8xl bg-gradient-to-r from-[#ae00ff] to-[#00fff0] bg-clip-text text-transparent">
              GAME DEVELOPMENT
            </h2>
          </motion.div>
          
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Crafting immersive gaming experiences that blend retro nostalgia with modern gameplay
          </motion.p>
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="inline-block text-3xl text-[#ae00ff] font-mono px-8 py-4 border-2 border-[#ae00ff] rounded-lg"
            animate={{
              boxShadow: [
                '0 0 20px #ae00ff',
                '0 0 40px #ae00ff',
                '0 0 20px #ae00ff',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            [ PRESS START ]
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        <motion.div
          className="bg-black/60 backdrop-blur-sm border border-[#ae00ff]/30 rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl mb-6 text-[#ae00ff]">GAME ENGINE & TOOLS</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Godot', level: 90 },
              { name: 'Unity', level: 75 },
              { name: 'Blender', level: 85 },
              { name: 'Pygame', level: 80 },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[#00fff0]">{tool.name}</span>
                  <span className="text-gray-400 text-sm">{tool.level}%</span>
                </div>
                
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#ae00ff] to-[#00fff0]"
                    initial={{ width: 0 }}
                    animate={{ width: `${tool.level}%` }}
                    transition={{ delay: 1 + index * 0.1, duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-[#ae00ff] font-mono">
            &gt;&gt; Passionate about retro &amp; classic-style games &lt;&lt;
          </p>
        </motion.div>
      </div>

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#ae00ff] rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
