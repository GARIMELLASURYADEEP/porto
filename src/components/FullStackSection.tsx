import { motion } from 'motion/react';
import ParticleBackground from './ParticleBackground';
import ProjectCard from './ProjectCard';
import { Award, Briefcase, Key, Terminal } from 'lucide-react';

interface FullStackSectionProps {
  setActiveSection: (section: string) => void;
}

export default function FullStackSection({ setActiveSection }: FullStackSectionProps) {
  const projects = [
    {
      title: 'Certificate Generator',
      description: 'Automated certificate generation system with customizable templates. Generates professional certificates from name, domain, and other parameters with real-time preview.',
      icon: <Award size={40} className="text-[#00aaff]" />,
      color: '#00aaff',
    },
    {
      title: 'Student Helper Toolkit',
      description: 'Comprehensive smart assistant with essential tools for students including calculator, reminder system, notes manager, and task scheduler.',
      icon: <Briefcase size={40} className="text-[#ae00ff]" />,
      color: '#ae00ff',
    },
    {
      title: 'Password Generator Extension',
      description: 'Browser extension for generating secure passwords with customizable parameters. Features include password history, auto-save, and strength analyzer.',
      icon: <Key size={40} className="text-[#00fff0]" />,
      color: '#00fff0',
    },
  ];

  const terminalLines = [
    '> Node.js Server Running...',
    '> Connection to MongoDB: Successful',
    '> Frontend Compiled: OK',
    '> API Routes: Active',
  ];

  return (
    <div className="relative min-h-screen px-4 py-24">
      <ParticleBackground type="particles" />
      
      <div className="absolute top-1/4 right-10 hidden lg:block">
        <motion.div
          className="bg-black/80 backdrop-blur-sm border border-[#00aaff]/30 rounded-lg p-4 font-mono text-sm"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          {terminalLines.map((line, index) => (
            <motion.div
              key={index}
              className="text-[#00fff0] mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + index * 0.3 }}
            >
              <Terminal size={14} className="inline mr-2" />
              {line}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl mb-4 bg-gradient-to-r from-[#00aaff] to-[#00fff0] bg-clip-text text-transparent">
            FULL STACK DEVELOPMENT
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building scalable web applications with modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        <motion.div
          className="bg-black/40 backdrop-blur-sm border border-[#00aaff]/30 rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl mb-6 text-[#00aaff]">TECH STACK</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Frontend', tech: 'React, Tailwind, HTML/CSS' },
              { label: 'Backend', tech: 'Node.js, Django, Flask' },
              { label: 'Database', tech: 'MongoDB, SQL, PostgreSQL' },
              { label: 'Tools', tech: 'Git, APIs, Docker' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-[#00aaff]/10 border border-[#00aaff]/30 rounded-lg p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="text-[#00fff0] text-sm mb-2">{item.label}</div>
                <div className="text-gray-400 text-xs">{item.tech}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
