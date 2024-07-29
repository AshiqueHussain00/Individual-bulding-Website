import React from "react";
import { motion } from 'framer-motion';
import background_image from "/src/images/background_div.png";
import bulding2 from "/src/images/building2.jpg";
import bulding3 from "/src/images/building3.jpg";

function ExampleComponent() {
  const containerVariants = {
    hidden: { y: 50 },
    visible: { y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="relative">
      {/* Background Image Animation */}
      <motion.img
        src={background_image}
        alt='Background Image'
        className="z-20 absolute inset-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Black background for content container */}
      <div className="back-element bg-black flex p-10 justify-between absolute z-21">

        {/* Left Part Animation */}
        <motion.div
          className="flex bg-transparent w-[38%] gap-5 items-center pr-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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
