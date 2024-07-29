import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import background_image from "/src/images/background_div.png";
import bulding2 from "/src/images/building2.jpg";
import bulding3 from "/src/images/building3.jpg";

function ExampleComponent() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  return (
    <div className="relative">
      {/* Background Image Animation */}
      <motion.img
        src={background_image}
        alt='Background Image'
        className="z-20 absolute inset-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Black background for content container */}
      <div ref={ref} className="back-element bg-black flex p-10 justify-between absolute z-0">

        {/* Left Part Animation */}
        <motion.div
          className="flex bg-transparent w-[38%] gap-5 items-center pr-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className='w-[400px] h-[130px]'>
            <motion.img
              src={bulding2}
              alt="Building Image"
              className="w-full h-full object-cover rounded-3xl"
              whileHover={{ scale: 1.1 }}
            />
          </div>

          <motion.div
            className="text-white"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p>
              This is some content that goes beside the image. You can add text,
              buttons, or any other elements here.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Part Animation */}
        <motion.div
          className="flex gap-5 bg-transparent w-[38%] items-center pr-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className='w-[400px] h-[130px]'>
            <motion.img
              src={bulding3}
              alt="Building Image"
              className="w-full h-full object-cover rounded-3xl"
              whileHover={{ scale: 1.1 }}
            />
          </div>

          <motion.div
            className="text-white"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p>
              This is some content that goes beside the image. You can add text,
              buttons, or any other elements here.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ExampleComponent;
