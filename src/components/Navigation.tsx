import { motion } from 'motion/react';
import { Home, User, Code, Gamepad2, Brain, Award, Wrench, FileText, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'fullstack', icon: Code, label: 'Full Stack' },
    { id: 'gamedev', icon: Gamepad2, label: 'Game Dev' },
    { id: 'ai', icon: Brain, label: 'AI & ML' },
    { id: 'achievements', icon: Award, label: 'Achievements' },
    { id: 'skills', icon: Wrench, label: 'Skills' },
    { id: 'resume', icon: FileText, label: 'Resume' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 px-8 py-4 bg-black/30 backdrop-blur-md border-b border-[#00fff0]/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="text-2xl bg-gradient-to-r from-[#00aaff] via-[#ae00ff] to-[#00fff0] bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
          onClick={() => setActiveSection('home')}
        >
          S
        </motion.div>

        <div className="hidden lg:flex gap-6">
          {navItems.map(({ id, icon: Icon, label }) => (
            <motion.button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`relative px-4 py-2 transition-colors ${
                activeSection === id ? 'text-[#00fff0]' : 'text-gray-400 hover:text-[#00aaff]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Icon size={18} />
                <span className="text-sm">{label}</span>
              </span>
              {activeSection === id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00aaff] to-[#00fff0]"
                  layoutId="activeTab"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <div className="flex lg:hidden">
          <motion.button
            className="p-2 text-[#00fff0]"
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
