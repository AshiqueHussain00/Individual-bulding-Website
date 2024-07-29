import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedContainer = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      controls.start({
        x: -window.innerWidth / 2 + 50, // Adjust based on your `div` width
        y: -window.innerHeight / 2 + 50, // Adjust based on your `div` height
        opacity: 0,
        transition: { duration: 1, ease: 'easeInOut' }
      });
    } else {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: 'easeInOut' }
      });
    }
  }, [isScrolled, controls]);

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        initial={{ y: 325 }}
        animate={controls}
      >
        <div className='text-white text-8xl font-bold'>SHAPE</div>
      </motion.div>
    </div>
  );
};

export default AnimatedContainer;



