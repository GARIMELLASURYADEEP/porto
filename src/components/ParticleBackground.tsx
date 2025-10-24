import { motion } from 'motion/react';

interface ParticleBackgroundProps {
  type?: 'grid' | 'particles' | 'neural' | 'gaming' | 'matrix';
}

export default function ParticleBackground({ type = 'grid' }: ParticleBackgroundProps) {
  if (type === 'grid') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00fff0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #00aaff10 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00fff0] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  }

  if (type === 'particles') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#00aaff] to-[#00fff0] rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  }

  if (type === 'gaming') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ae00ff]/10 to-transparent" />
        
        <svg className="absolute bottom-0 left-0 right-0 h-1/2 opacity-30">
          <defs>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ae00ff" stopOpacity="0" />
              <stop offset="100%" stopColor="#00fff0" stopOpacity="1" />
            </linearGradient>
          </defs>
          {[...Array(20)].map((_, i) => (
            <line
              key={`v${i}`}
              x1={`${(i / 20) * 100}%`}
              y1="0"
              x2={`${(i / 20) * 100}%`}
              y2="100%"
              stroke="url(#gridGradient)"
              strokeWidth="1"
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={`${(i / 10) * 100}%`}
              x2="100%"
              y2={`${(i / 10) * 100}%`}
              stroke="url(#gridGradient)"
              strokeWidth="1"
            />
          ))}
        </svg>

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-[#ae00ff] to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
            animate={{
              height: [20, 100, 20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  }

  if (type === 'neural') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const endX = Math.random() * 100;
          const endY = Math.random() * 100;

          return (
            <svg key={i} className="absolute inset-0 w-full h-full opacity-20">
              <motion.line
                x1={`${startX}%`}
                y1={`${startY}%`}
                x2={`${endX}%`}
                y2={`${endY}%`}
                stroke="#00fff0"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
              <circle cx={`${startX}%`} cy={`${startY}%`} r="3" fill="#00aaff" />
              <circle cx={`${endX}%`} cy={`${endY}%`} r="3" fill="#ae00ff" />
            </svg>
          );
        })}

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, #00fff050, transparent)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>
    );
  }

  if (type === 'matrix') {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 font-mono text-[#00fff0] text-xs"
            style={{
              left: `${(i / 30) * 100}%`,
            }}
            animate={{
              y: ['0vh', '100vh'],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear',
            }}
          >
            {Array.from({ length: 10 }, () => 
              String.fromCharCode(33 + Math.floor(Math.random() * 94))
            ).join('')}
          </motion.div>
        ))}
      </div>
    );
  }

  return null;
}
