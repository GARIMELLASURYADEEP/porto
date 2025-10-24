import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface CursorTrailProps {
  cursorPos: { x: number; y: number };
}

export default function CursorTrail({ cursorPos }: CursorTrailProps) {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const newPoint = { x: cursorPos.x, y: cursorPos.y, id: Date.now() };
    setTrail(prev => [...prev.slice(-20), newPoint]);
  }, [cursorPos.x, cursorPos.y]);

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, #00fff080, #ae00ff40, transparent)',
        }}
        animate={{
          x: cursorPos.x - 16,
          y: cursorPos.y - 16,
        }}
        transition={{
          duration: 0,
        }}
      />

      {/* Plasma trail effect */}
      {trail.map((point, i) => (
        <motion.div
          key={point.id}
          className="fixed rounded-full pointer-events-none z-50 mix-blend-screen"
          style={{
            width: 4 + (i / trail.length) * 8,
            height: 4 + (i / trail.length) * 8,
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? '#00fff0' : i % 3 === 1 ? '#ae00ff' : '#00aaff'
            }, transparent)`,
            left: point.x,
            top: point.y,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ 
            opacity: 0,
            scale: 0.5,
          }}
          transition={{
            duration: 0.6,
          }}
        />
      ))}

      {/* Ripple effect on click */}
      <motion.div
        className="fixed w-12 h-12 rounded-full border-2 border-[#00fff0] pointer-events-none z-50"
        style={{
          left: cursorPos.x - 24,
          top: cursorPos.y - 24,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 0, opacity: 0 }}
      />
    </>
  );
}
