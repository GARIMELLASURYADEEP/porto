import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  index: number;
}

export default function ProjectCard({ title, description, icon, color, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        z: 50,
      }}
      style={{ 
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Shadow and glow */}
      <motion.div
        className="absolute inset-0 rounded-lg blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
        style={{ 
          backgroundColor: color,
          transform: 'translateZ(-20px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(45deg, ${color}, transparent, ${color})`,
          backgroundSize: '200% 200%',
        }}
        animate={isHovered ? {
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        } : {}}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div 
        className="relative bg-black/60 backdrop-blur-sm border-2 rounded-lg p-6 h-full transition-all duration-300 overflow-hidden"
        style={{ 
          borderColor: `${color}40`,
          transform: 'translateZ(20px)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Holographic scan line */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-30"
          style={{
            background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
            height: '2px',
          }}
          animate={isHovered ? {
            top: ['-2px', '100%'],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <div className="mb-4 flex items-start justify-between">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          
          <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color }} size={20} />
        </div>

        <h3 className="text-2xl mb-3" style={{ color }}>
          {title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>

        <div className="mt-6 flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="h-1 flex-1 rounded-full"
              style={{ backgroundColor: `${color}40` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.2 + i * 0.1 }}
            />
          ))}
        </div>

        <motion.div
          className="absolute top-0 left-0 w-full h-1 rounded-t-lg"
          style={{ backgroundColor: color }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: index * 0.2 }}
        />
      </div>
    </motion.div>
  );
}
