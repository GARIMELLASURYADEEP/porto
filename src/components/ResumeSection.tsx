import { motion } from 'motion/react';
import { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import { Download, FileText, Sparkles, Lock, Unlock } from 'lucide-react';
import { Button } from './ui/button';

interface ResumeSectionProps {
  setActiveSection: (section: string) => void;
}

export default function ResumeSection({ setActiveSection }: ResumeSectionProps) {
  const [vaultOpen, setVaultOpen] = useState(false);
  
  const handleDownload = () => {
    alert('Resume download would start here. In a real implementation, this would trigger a PDF download.');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-24">
      <ParticleBackground type="grid" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl mb-8 bg-gradient-to-r from-[#00aaff] to-[#00fff0] bg-clip-text text-transparent">
            RESUME
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and achievements
          </p>
        </motion.div>

        {/* Vault Door Animation */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          onMouseEnter={() => setVaultOpen(true)}
          onMouseLeave={() => setVaultOpen(false)}
        >
          {/* Vault door effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#00aaff] to-[#ae00ff] rounded-2xl opacity-20"
            animate={vaultOpen ? {
              scaleX: [1, 0.95, 0.9],
              x: [0, -20, -40],
            } : {
              scaleX: 1,
              x: 0,
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-l from-[#ae00ff] to-[#00fff0] rounded-2xl opacity-20"
            animate={vaultOpen ? {
              scaleX: [1, 0.95, 0.9],
              x: [0, 20, 40],
            } : {
              scaleX: 1,
              x: 0,
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#00aaff] via-[#ae00ff] to-[#00fff0] rounded-2xl blur-2xl opacity-30 group-hover:opacity-60"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />

          <div className="relative bg-black/60 backdrop-blur-xl border border-[#00fff0]/30 rounded-2xl p-12">
            {/* Lock/Unlock icon */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{
                rotate: vaultOpen ? 45 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              {vaultOpen ? (
                <Unlock size={32} className="text-green-400" />
              ) : (
                <Lock size={32} className="text-[#00fff0]" />
              )}
            </motion.div>

            <motion.div
              className="mb-8"
              animate={{
                y: [0, -10, 0],
                rotateY: vaultOpen ? [0, 360] : 0,
              }}
              transition={{
                y: { duration: 3, repeat: Infinity },
                rotateY: { duration: 1 },
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative inline-block">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00aaff] to-[#00fff0] rounded-xl blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                
                <div className="relative bg-gradient-to-r from-[#00aaff]/20 to-[#00fff0]/20 p-8 rounded-xl border border-[#00fff0]/30">
                  <FileText size={80} className="text-[#00fff0]" />
                  
                  <motion.div
                    className="absolute top-2 right-2"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Sparkles size={20} className="text-[#ae00ff]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <h3 className="text-3xl mb-4 bg-gradient-to-r from-[#00aaff] to-[#00fff0] bg-clip-text text-transparent">
              Surya
            </h3>
            <p className="text-gray-400 mb-8">
              Full Stack Developer • Game Developer • AI Explorer
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleDownload}
                className="relative px-10 py-6 bg-transparent border-2 border-[#00fff0] text-[#00fff0] hover:bg-[#00fff0]/20 text-lg group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00aaff] to-[#00fff0]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10 flex items-center gap-3">
                  <Download size={24} />
                  Download My Resume
                </span>

                <motion.div
                  className="absolute inset-0"
                  animate={{
                    boxShadow: [
                      '0 0 20px #00fff0',
                      '0 0 40px #00fff0',
                      '0 0 20px #00fff0',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 grid grid-cols-3 gap-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { label: 'Projects', value: '15+' },
                { label: 'Technologies', value: '20+' },
                { label: 'Achievements', value: '10+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-[#00aaff]/10 border border-[#00aaff]/30 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="text-2xl text-[#00fff0] mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#00fff0]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-500 text-sm">
            PDF Format • Updated October 2025 • Comprehensive Portfolio
          </p>
        </motion.div>
      </div>
    </div>
  );
}
