import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import { Trophy, Medal, Award, Zap, Star } from 'lucide-react';

interface AchievementsSectionProps {
  setActiveSection: (section: string) => void;
}

export default function AchievementsSection({ setActiveSection }: AchievementsSectionProps) {
  const [selectedTrophy, setSelectedTrophy] = useState<number | null>(null);
  
  const achievements = [
    {
      icon: Trophy,
      title: 'Smart India Hackathon 2024',
      rank: 'Top 3',
      description: 'Secured Top 3 position with innovative problem statement solution',
      color: '#FFD700',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Medal,
      title: 'Smart India Hackathon 2025',
      rank: 'Top 4',
      description: 'Achieved Top 4 with two problem statements showcasing versatility',
      color: '#00aaff',
      gradient: 'from-[#00aaff] to-[#0066cc]',
    },
    {
      icon: Award,
      title: 'AI & Game Design Recognition',
      rank: 'Multiple',
      description: 'Various project recognitions in AI innovation and Game Design categories',
      color: '#ae00ff',
      gradient: 'from-[#ae00ff] to-[#6600cc]',
    },
    {
      icon: Zap,
      title: 'Innovation Award',
      rank: 'Excellence',
      description: 'Recognition for outstanding innovation in software development',
      color: '#00fff0',
      gradient: 'from-[#00fff0] to-[#00aaaa]',
    },
  ];

  return (
    <div className="relative min-h-screen px-4 py-24">
      <ParticleBackground type="particles" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl mb-4 bg-gradient-to-r from-yellow-400 via-[#00aaff] to-[#ae00ff] bg-clip-text text-transparent">
            ACHIEVEMENTS
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Recognition and milestones in technology innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 100, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              style={{ 
                perspective: 1000,
                transformStyle: 'preserve-3d',
              }}
              onClick={() => setSelectedTrophy(selectedTrophy === index ? null : index)}
            >
              {/* Trophy showcase effect */}
              <AnimatePresence>
                {selectedTrophy === index && (
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1,
                      scale: 1,
                      rotate: 360,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 0.3 },
                    }}
                  >
                    <Star className="absolute top-0 left-1/2 -translate-x-1/2 text-yellow-400" size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                className="absolute inset-0 rounded-lg blur-2xl opacity-0 group-hover:opacity-60"
                style={{ backgroundColor: achievement.color }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <div className="relative bg-black/60 backdrop-blur-sm border-2 rounded-lg p-8 h-full overflow-hidden"
                style={{ 
                  borderColor: `${achievement.color}40`,
                  transform: 'translateZ(20px)',
                }}
              >
                {/* Holographic scan effect */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${achievement.color}, transparent)`,
                  }}
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="p-4 rounded-lg relative"
                    style={{ 
                      backgroundColor: `${achievement.color}20`,
                      transformStyle: 'preserve-3d',
                    }}
                    animate={{
                      rotateY: selectedTrophy === index ? 360 : 0,
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 180,
                    }}
                    transition={{ 
                      rotateY: { duration: 1 },
                      scale: { duration: 0.3 },
                    }}
                  >
                    {/* Trophy with 3D rotation */}
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <achievement.icon size={40} style={{ color: achievement.color }} />
                    </motion.div>
                    
                    {/* Particle burst on hover */}
                    {[...Array(8)].map((_, i) => {
                      const angle = (i / 8) * 360;
                      return (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                          style={{
                            backgroundColor: achievement.color,
                            left: '50%',
                            top: '50%',
                          }}
                          animate={{
                            x: Math.cos((angle * Math.PI) / 180) * 30,
                            y: Math.sin((angle * Math.PI) / 180) * 30,
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      );
                    })}
                  </motion.div>

                  <div className="flex-1">
                    <motion.div
                      className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${achievement.gradient} text-white text-sm mb-2`}
                      animate={{
                        boxShadow: [
                          `0 0 10px ${achievement.color}`,
                          `0 0 20px ${achievement.color}`,
                          `0 0 10px ${achievement.color}`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      {achievement.rank}
                    </motion.div>
                    
                    <h3 className="text-2xl mb-2" style={{ color: achievement.color }}>
                      {achievement.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {achievement.description}
                </p>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 h-1 rounded-full"
                      style={{ backgroundColor: `${achievement.color}40` }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    />
                  ))}
                </div>

                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 opacity-10"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <achievement.icon size={80} style={{ color: achievement.color }} />
                </motion.div>
              </div>

              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: achievement.color,
                    top: `${20 + i * 30}%`,
                    right: -10,
                  }}
                  animate={{
                    x: [0, 20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center bg-black/40 backdrop-blur-sm border border-[#00fff0]/30 rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="inline-block"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <h3 className="text-3xl bg-gradient-to-r from-[#00aaff] to-[#00fff0] bg-clip-text text-transparent mb-2">
              Journey of Innovation
            </h3>
          </motion.div>
          <p className="text-gray-400 text-lg">
            Every achievement is a stepping stone towards greater innovation and excellence
          </p>
        </motion.div>
      </div>
    </div>
  );
}
