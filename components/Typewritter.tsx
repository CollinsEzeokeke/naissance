'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TEXTS = [
  "Hi there!",
  "My name is Allan",
  "I'm from SP, Brazil",
  "Allan Leone"
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      startTyping(TEXTS[index]);
    }, index === 0 ? 1000 : 2500 * index);

    return () => clearTimeout(timer);
  }, [index]);

  const startTyping = (fullText: string) => {
    let currentText: string[] = [];
    let charIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        currentText = [...currentText, fullText[charIndex]];
        setText(currentText);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsVisible(false);
          setIndex(prev => (prev + 1) % TEXTS.length);
        }, 2500);
      }
    }, 50);
  };

  return (
    <div className="flex items-center justify-center h-full bg-blue-500 w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-6xl font-mono relative"
      >
        <AnimatePresence mode='wait'>
          {isVisible && (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="whitespace-nowrap"
            >
              {text.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
              <span className="ml-1 border-r-2 border-black animate-blink" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
