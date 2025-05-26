import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalLineProps {
  content: string;
  prefix?: string;
  delay: number;
}

const TerminalLine: React.FC<TerminalLineProps> = ({ content, prefix = '>', delay }) => {
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < content.length) {
          setDisplayText(content.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [content, delay]);

  useEffect(() => {
    if (isComplete) {
      const cursorInterval = setInterval(() => {
        setCursorVisible((prev) => !prev);
      }, 500);

      return () => clearInterval(cursorInterval);
    }
  }, [isComplete]);

  return (
    <div className="font-mono text-sm">
      <span className="text-green-500">{prefix} </span>
      <span>{displayText}</span>
      {!isComplete && cursorVisible && <span className="text-white animate-pulse">|</span>}
    </div>
  );
};

interface AnimatedTerminalProps {
  commands: string[];
  className?: string;
}

export const AnimatedTerminal: React.FC<AnimatedTerminalProps> = ({ commands, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`terminal ${className}`}
    >
      <div className="flex items-center mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-2">
        {commands.map((command, index) => (
          <TerminalLine
            key={index}
            content={command}
            delay={index * 1000}
          />
        ))}
      </div>
    </motion.div>
  );
};