import { motion } from 'motion/react';
import ParticleBackground from './ParticleBackground';
import { Brain, Image, Video, Code, FileText, Music, Sparkles } from 'lucide-react';

interface AISectionProps {
  setActiveSection: (section: string) => void;
}

export default function AISection({ setActiveSection }: AISectionProps) {
  const modalities = [
    { name: 'Text', icon: FileText, color: '#00aaff' },
    { name: 'Image', icon: Image, color: '#ae00ff' },
    { name: 'Video', icon: Video, color: '#00fff0' },
    { name: 'Code', icon: Code, color: '#00aaff' },
    { name: 'Website', icon: Sparkles, color: '#ae00ff' },
    { name: 'Audio', icon: Music, color: '#00fff0' },
  ];

  return (
    <div className="relative min-h-screen px-4 py-24 overflow-hidden">
      <ParticleBackground type="neural" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl mb-4 bg-gradient-to-r from-[#00fff0] via-[#00aaff] to-[#ae00ff] bg-clip-text text-transparent">
            AI & MACHINE LEARNING
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring the frontiers of artificial intelligence and generative models
          </p>
        </motion.div>

        <div className="relative mb-16 h-96">
          <motion.div
            className="relative w-64 h-64 mx-auto"
            style={{ perspective: 1000 }}
            animate={{
              rotateY: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Multiple rotating holographic rings */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border-2 opacity-20"
                style={{
                  borderColor: i % 2 === 0 ? '#00fff0' : '#ae00ff',
                  transform: `rotateX(${i * 30}deg)`,
                }}
                animate={{
                  rotateZ: 360,
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: 'linear',
                  direction: i % 2 === 0 ? 'normal' : 'reverse',
                }}
              />
            ))}

            {/* Pulsing energy waves */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, #00fff050, transparent)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            {/* Central AI Core Sphere */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative w-32 h-32 rounded-full bg-gradient-to-r from-[#00aaff] to-[#ae00ff] flex items-center justify-center cursor-pointer group"
                whileHover={{ scale: 1.2, rotateY: 180 }}
                animate={{
                  boxShadow: [
                    '0 0 30px #00fff0, inset 0 0 20px #00aaff',
                    '0 0 60px #00aaff, inset 0 0 30px #ae00ff',
                    '0 0 30px #ae00ff, inset 0 0 20px #00fff0',
                    '0 0 60px #00fff0, inset 0 0 30px #00aaff',
                  ],
                }}
                transition={{
                  boxShadow: { duration: 4, repeat: Infinity },
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Refracted light effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/10"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    background: 'linear-gradient(135deg, transparent 0%, white 50%, transparent 100%)',
                  }}
                />
                
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Brain size={48} className="text-white relative z-10" />
                </motion.div>

                {/* Energy particles emanating from core */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i / 12) * 360;
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-[#00fff0] rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: [0, Math.cos((angle * Math.PI) / 180) * 100],
                        y: [0, Math.sin((angle * Math.PI) / 180) * 100],
                        opacity: [1, 0],
                        scale: [1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: 'easeOut',
                      }}
                    />
                  );
                })}
              </motion.div>
            </div>

            {modalities.map((modality, index) => {
              const angle = (index / modalities.length) * 360;
              const radius = 120;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={modality.name}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-black/80 backdrop-blur-sm border-2 flex items-center justify-center cursor-pointer"
                    style={{ borderColor: modality.color }}
                    animate={{
                      boxShadow: [
                        `0 0 10px ${modality.color}`,
                        `0 0 20px ${modality.color}`,
                        `0 0 10px ${modality.color}`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <modality.icon size={24} style={{ color: modality.color }} />
                  </motion.div>
                  
                  <div 
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap"
                    style={{ color: modality.color }}
                  >
                    {modality.name}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="bg-black/60 backdrop-blur-sm border border-[#00fff0]/30 rounded-lg p-8 mt-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-4xl mb-4 bg-gradient-to-r from-[#00fff0] to-[#ae00ff] bg-clip-text text-transparent">
              TURING NOVA AI
            </h3>
            <p className="text-gray-400 text-lg">
              A Multimodal Generative AI Platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#00fff0]/10 border border-[#00fff0]/30 rounded-lg p-6">
              <h4 className="text-[#00fff0] mb-3">CAPABILITIES</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Text-to-Text Generation</li>
                <li>• Image Synthesis & Editing</li>
                <li>• Video Generation</li>
                <li>• Code Completion & Generation</li>
                <li>• Website Creation</li>
                <li>• Resume Builder</li>
                <li>• Audio & Music Generation</li>
              </ul>
            </div>

            <div className="bg-[#ae00ff]/10 border border-[#ae00ff]/30 rounded-lg p-6">
              <h4 className="text-[#ae00ff] mb-3">TECHNOLOGIES</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Transformer Architecture</li>
                <li>• Neural Network Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Generative Adversarial Networks</li>
                <li>• Deep Learning Frameworks</li>
                <li>• Multi-Modal Integration</li>
              </ul>
            </div>
          </div>

          <motion.div
            className="text-center py-4 border-t border-[#00fff0]/20"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <p className="text-[#00fff0] font-mono">
              &lt;/&gt; Pushing the boundaries of AI innovation &lt;/&gt;
            </p>
          </motion.div>
        </motion.div>

        <div className="absolute top-1/4 left-10 hidden xl:block">
          <motion.div
            className="font-mono text-xs text-[#00fff0]/50 space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                {Array.from({ length: 40 }, () => 
                  Math.random() > 0.5 ? '1' : '0'
                ).join('')}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
