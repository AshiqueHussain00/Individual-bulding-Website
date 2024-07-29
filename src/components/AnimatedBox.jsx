import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';


// import { useInView } from 'framer-motion';


const AnimatedBox = () => {
  const [isInView, setIsInView] = useState(false);
  const [hasScaledUp, setHasScaledUp] = useState(false);
  const { ref } = useInView({
    threshold: 0.5,
    triggerOnce: false,
    onChange: (inView) => {
      setIsInView(inView);
      if (!inView) {
        setHasScaledUp(false);
      }
    }
  });

  const variants = {
    initialState: {
      x: "-50px",
      y: "10vh",
      opacity: 0,
      scale: 1,
      transition: {
        duration: 0.1,
        delay: 0.1,
      },
    },
    animateState: {
      x: "-53px",
      y: "-40px",
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 0.1,
        delay: 0.1,
      },
    },
    scaleUp: {
      scale: 1.5,
      transition: {
        duration: 0.5,
        delay: 1.2,
      },
    },
    exitState: {
      x: "50%",
      y: "110vh",
      opacity: 0,
      scale: 2,
      transition: {
        type: "spring",
        stiffness: 5,
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <div ref={ref} className="relative pt-10">
      {hasScaledUp && (
        <motion.div
          className="absolute rounded-full bg-black bg-opacity-50 border-2 border-white pt-10"
          style={{
            width: '160px',
            height: '160px',
            left: "49.7%",
            transform: "translateX(-50%)",
            top: "calc(-56px + 1.5rem)",
            zIndex: 49,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hasScaledUp ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      <motion.div
        className="w-24 h-24 bg-white rounded-full absolute flex items-center justify-center text-black"
        variants={variants}
        initial="initialState"
        animate={isInView ? ['animateState', 'scaleUp'] : 'initialState'}
        exit="exitState"
        onAnimationComplete={(currentAnimation) => {
          if (currentAnimation === 'scaleUp') {
            setHasScaledUp(true);
          }
        }}
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
        }}
      >
        <span className="text-xs font-semibold">Learn More</span>
      </motion.div>

      <motion.div
        className="flex flex-col gap-y-3 absolute left-1/2 transform -translate-x-1/2 top-1/2 items-center pt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScaledUp ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
      
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black text-lg pt-10">
          
        </div>
    
      </motion.div>
    </div>
  );
};

export default AnimatedBox;
