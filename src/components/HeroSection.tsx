import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Zap } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import MouseParallax from './MouseParallax';
import ThreeDText from './ThreeDText';
import { Button } from './ui/button';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

export default function HeroSection({ setActiveSection }: HeroSectionProps) {
  const [typedText, setTypedText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = 'Full Stack Developer | Game Developer | AI Explorer';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'Python', 'React', 'Node.js', 
    'Godot', 'Blender', 'Unity', 'MongoDB', 'SQL', 'Django',
    'TailwindCSS', 'Flask', 'APIs', 'Git', 'ML', 'AI'
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground type="grid" />
      
      {/* Holographic background layers with parallax */}
      <MouseParallax strength={10} className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00aaff]/20 via-transparent to-[#ae00ff]/20" />
      </MouseParallax>
      
      <MouseParallax strength={20} className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#00fff050' : '#ae00ff50'}, transparent)`,
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
              filter: 'blur(40px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </MouseParallax>
      
      <div className="relative z-10 text-center px-4">
        {/* 3D Holographic Name */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
          }}
        >
          <div className="relative inline-block">
            {/* Holographic ring around name */}
            <motion.div
              className="absolute -inset-12 border-2 border-[#00fff0] rounded-full opacity-30"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                scale: { duration: 3, repeat: Infinity },
              }}
            />
            <motion.div
              className="absolute -inset-8 border border-[#ae00ff] rounded-full opacity-20"
              animate={{
                rotate: -360,
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                scale: { duration: 4, repeat: Infinity },
              }}
            />
            
            <ThreeDText
              className="text-5xl md:text-7xl bg-gradient-to-r from-[#00aaff] via-[#ae00ff] to-[#00fff0] bg-clip-text text-transparent mb-4"
              glowColor="#00fff0"
            >
              I'M SURYA
            </ThreeDText>
            
            {/* Orbiting UI chips */}
            {['Creator', 'Innovator', 'Hacker'].map((label, i) => {
              const angle = (i / 3) * 360;
              const radius = 180;
              return (
                <motion.div
                  key={label}
                  className="absolute text-xs px-3 py-1 bg-black/60 border border-[#00fff0]/30 rounded-full backdrop-blur-sm"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: Math.cos((angle * Math.PI) / 180 + Date.now() / 1000) * radius - 40,
                    y: Math.sin((angle * Math.PI) / 180 + Date.now() / 1000) * radius - 10,
                  }}
                  transition={{
                    duration: 0,
                    repeat: Infinity,
                  }}
                >
                  <motion.span
                    className="text-[#00fff0]"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {label}
                  </motion.span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="h-12 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl md:text-2xl text-[#00fff0] font-mono">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        {/* 3D Gateway Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {[
            { label: 'Explore My Work', section: 'fullstack', color: '#00aaff', icon: Zap },
            { label: 'View Resume', section: 'resume', color: '#ae00ff', icon: Zap },
            { label: 'Connect', section: 'contact', color: '#00fff0', icon: Zap },
          ].map((btn, index) => (
            <motion.div
              key={btn.section}
              whileHover={{ scale: 1.05, z: 20 }}
              whileTap={{ scale: 0.95 }}
              style={{ perspective: 1000 }}
            >
              <Button
                onClick={() => setActiveSection(btn.section)}
                className="relative px-8 py-6 bg-transparent border-2 overflow-hidden group"
                style={{ borderColor: btn.color }}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20"
                  style={{ background: btn.color }}
                  initial={false}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    boxShadow: [
                      `0 0 0px ${btn.color}`,
                      `0 0 20px ${btn.color}`,
                      `0 0 0px ${btn.color}`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
                
                <span className="relative z-10 flex items-center gap-2" style={{ color: btn.color }}>
                  <btn.icon size={18} />
                  {btn.label}
                </span>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative overflow-hidden py-6 border-y border-[#00fff0]/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <span
                key={index}
                className="text-[#00fff0] font-mono text-lg px-4"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <ChevronDown className="text-[#00fff0]" size={40} />
        </motion.div>
      </div>
    </div>
  );
}
