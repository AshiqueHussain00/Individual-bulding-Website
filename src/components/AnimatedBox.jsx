import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoKeyOutline, IoHeartOutline, IoBagOutline } from 'react-icons/io5';
import { useInView } from 'framer-motion';

const AnimatedBox = () => {
  const [isInView, setIsInView] = useState(false);
  const [hasScaledUp, setHasScaledUp] = useState(false);
  const { ref } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the component is in view
    triggerOnce: false, // Trigger animation on each intersection
    onChange: (inView) => {
      setIsInView(inView);
      if (!inView) {
        setHasScaledUp(false); // Reset animation state when out of view
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
        duration: 1,
        delay: 1,
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
        duration: 0.5,
        delay: 3,
      },
    },
    scaleUp: {
      scale: 1.5,
      transition: {
        duration: 1,
        delay: 3,
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
        duration: 1,
        delay: 1,
      },
    },
  };

  const iconData = [
    { id: 1, icon: <IoKeyOutline /> },
    { id: 2, icon: <IoHeartOutline /> },
    { id: 3, icon: <IoBagOutline /> },
  ];

  return (
    <div ref={ref} className="relative">
      {hasScaledUp && (
        <motion.div
          className="absolute rounded-full bg-black bg-opacity-50 border-2 border-white"
          style={{
            width: '160px',
            height: '160px',
            left: "49.7%",
            transform: "translateX(-50%)",
            top: "calc(-96px + 1.5rem)",
            zIndex: 49,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hasScaledUp ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      )}

      <motion.div
        className="w-24 h-24 bg-white rounded-full absolute flex items-center justify-center text-black"
        variants={variants}
        initial="initialState"
        animate={isInView ? ['animateState', 'scaleUp'] : 'initialState'} // Trigger animations when in view
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
        className="flex flex-col gap-y-3 absolute left-1/2 transform -translate-x-1/2 top-1/2 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScaledUp ? 1 : 0 }}
        transition={{ duration: 1, delay: 4 }}
      >
        {iconData.map((data, index) => (
          <motion.div
            key={data.id}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black text-lg"
            custom={index}
            variants={{
              animate: {
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.5, duration: 0.5 }
              }
            }}
            animate={hasScaledUp ? "animate" : ""}
          >
            {data.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedBox;
