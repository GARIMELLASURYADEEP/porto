import { useEffect, useState, ReactNode } from 'react';
import { motion } from 'motion/react';

interface MouseParallaxProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export default function MouseParallax({ children, strength = 20, className = '' }: MouseParallaxProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className={className}
      animate={{
        x: mousePosition.x * strength,
        y: mousePosition.y * strength,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}
