import { motion } from 'motion/react';

interface ThreeDTextProps {
  children: string;
  className?: string;
  glowColor?: string;
}

export default function ThreeDText({ children, className = '', glowColor = '#00fff0' }: ThreeDTextProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateY: [0, 5, 0, -5, 0],
        rotateX: [0, -2, 0, 2, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Shadow layers for 3D depth */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            transform: `translateZ(${-i * 2}px)`,
            opacity: 0.1 - i * 0.01,
            color: glowColor,
            filter: 'blur(1px)',
          }}
        >
          {children}
        </div>
      ))}
      
      {/* Main text with gradient */}
      <motion.div
        className="relative"
        style={{
          transform: 'translateZ(0px)',
        }}
        animate={{
          textShadow: [
            `0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
            `0 0 40px ${glowColor}, 0 0 60px ${glowColor}`,
            `0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
