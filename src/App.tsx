import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FullStackSection from './components/FullStackSection';
import GameDevSection from './components/GameDevSection';
import AISection from './components/AISection';
import AchievementsSection from './components/AchievementsSection';
import SkillsSection from './components/SkillsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import CursorTrail from './components/CursorTrail';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sections = [
    { id: 'home', component: HeroSection },
    { id: 'about', component: AboutSection },
    { id: 'fullstack', component: FullStackSection },
    { id: 'gamedev', component: GameDevSection },
    { id: 'ai', component: AISection },
    { id: 'achievements', component: AchievementsSection },
    { id: 'skills', component: SkillsSection },
    { id: 'resume', component: ResumeSection },
    { id: 'contact', component: ContactSection },
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <CursorTrail cursorPos={cursorPos} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <AnimatePresence mode="wait">
        {sections.map(({ id, component: Component }) => (
          activeSection === id && (
            <motion.div
              key={id}
              initial={{ 
                opacity: 0,
                scale: 0.9,
                rotateX: -10,
                z: -100,
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
                rotateX: 0,
                z: 0,
              }}
              exit={{ 
                opacity: 0,
                scale: 1.1,
                rotateX: 10,
                z: 100,
              }}
              transition={{ 
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
              }}
            >
              <Component setActiveSection={setActiveSection} />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Section transition overlay */}
      <AnimatePresence>
        <motion.div
          key={`overlay-${activeSection}`}
          className="fixed inset-0 pointer-events-none z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
          style={{
            background: activeSection === 'fullstack' 
              ? 'radial-gradient(circle, #00aaff20, transparent)'
              : activeSection === 'gamedev'
              ? 'radial-gradient(circle, #ae00ff20, transparent)'
              : activeSection === 'ai'
              ? 'radial-gradient(circle, #00fff020, transparent)'
              : 'transparent',
          }}
        />
      </AnimatePresence>
    </div>
  );
}
