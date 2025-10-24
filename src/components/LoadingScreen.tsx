import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  
  const bootSequence = [
    '> Initializing portfolio.exe',
    '> Loading modules: GameDev.dll',
    '> Loading modules: FullStack.sys',
    '> Loading modules: TuringNovaAI.core',
    '> Establishing neural connections...',
    '> Rendering 3D environments...',
    '> System online. Welcome, User.',
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine(prev => {
        if (prev >= bootSequence.length - 1) {
          clearInterval(lineInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(lineInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="boot-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <motion.path 
                d="M 50 0 L 0 0 0 50" 
                fill="none" 
                stroke="#00fff0" 
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#boot-grid)" />
        </svg>
      </div>

      {/* Holographic center ring */}
      <motion.div
        className="absolute w-64 h-64 rounded-full border-2 border-[#00fff0]"
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        animate={{ scale: 1, rotate: 360, opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full border-2 border-[#ae00ff]"
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        animate={{ scale: 1, rotate: -360, opacity: 0.3 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-2xl px-8">
        {/* Boot sequence lines */}
        <div className="mb-8 space-y-2 min-h-[200px]">
          <AnimatePresence>
            {bootSequence.slice(0, currentLine + 1).map((line, index) => (
              <motion.div
                key={index}
                className="text-[#00fff0] font-mono text-sm md:text-base"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {line}
                {index === currentLine && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    _
                  </motion.span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Progress bar with 3D effect */}
        <div className="relative">
          <div className="w-full h-3 bg-gray-900 rounded-full overflow-hidden border border-[#00fff0]/30">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00aaff] via-[#ae00ff] to-[#00fff0] relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/30"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <div className="text-[#00fff0] font-mono text-lg">
              LOADING: {Math.floor(progress)}%
            </div>
            <motion.div
              className="text-[#ae00ff] font-mono text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              [SYSTEM READY]
            </motion.div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00fff0] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
