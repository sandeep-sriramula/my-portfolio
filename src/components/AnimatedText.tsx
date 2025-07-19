import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  texts: string[];
  className?: string;
  delay?: number;
}

export default function AnimatedText({ texts, className = '', delay = 2000 }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, delay);

    return () => clearInterval(interval);
  }, [texts.length, delay]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {texts.map((text, index) => (
        <motion.span
          key={`${text}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            y: index === currentIndex ? 0 : 20,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
          className={`absolute inset-0 ${
            index === currentIndex ? 'relative' : 'absolute'
          }`}
        >
          {text}
        </motion.span>
      ))}
    </div>
  );
}
