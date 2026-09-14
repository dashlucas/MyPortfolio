import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedChar: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block select-none">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  let charCounter = 0;

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIndex) => {
        const charsInWord = word.split('');
        const renderedWord = (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {charsInWord.map((char, cIdx) => {
              const start = charCounter / totalChars;
              const step = 0.05;
              const end = Math.min(1, start + step);
              charCounter += 1;
              return (
                <AnimatedChar
                  key={`${wordIndex}-${cIdx}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );

        // Account for the trailing space in charCounter if not last word
        if (wordIndex < words.length - 1) {
          charCounter += 1;
          return (
            <React.Fragment key={wordIndex}>
              {renderedWord}
              <span> </span>
            </React.Fragment>
          );
        }

        return <React.Fragment key={wordIndex}>{renderedWord}</React.Fragment>;
      })}
    </p>
  );
};

export default AnimatedText;
