import React from "react";
import background_image from "/src/images/background_div.png";
import bulding2 from "/src/images/building2.jpg";
import bulding3 from "/src/images/building3.jpg";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function ExampleComponent() {
  // For delay ater InView condtion
  const ref = useRef(null);

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const isInView = useInView(ref, {
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    let timer;
    let timer2;

    if (isInView) {
      timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 1300); //1.5 seconds delay

      timer2 = setTimeout(() => {
        setShowCard(true);
      }, 1700);
    } else {
      setShouldAnimate(false);
    }

    return () => clearTimeout(timer, timer2);
  }, [isInView]);

  const Variant1 = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },

    card: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div ref={ref} className="relative w-[95%] mx-auto bg-transparent ">
      {/* Background Image Animation */}
      <motion.img
        src={background_image}
        alt="Background Image"
        className="z-20 "
        initial={{ opacity: 0, y: 50 }}
        animate={shouldAnimate ? "show" : ""}
        variants={Variant1}
        transition={{ duration: 0.7 }}
      />

      {/* Left Part Animation */}
      <motion.div className="flex text-black  w-[38%] gap-5 items-center pr-20 absolute top-[40px] left-[45px] z-[30] ">
        <div className="w-[400px] h-[130px]">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={showCard ? "card" : ""}
            variants={Variant1}
            src={bulding2}
            alt="Building Image"
            className="w-full h-full object-cover rounded-3xl"
            whileHover={{ scale: 1.1 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={showCard ? "card" : ""}
          variants={Variant1}
          className="text-white"
        >
          <p>
            This is some content that goes beside the image. You can add text,
            buttons, or any other elements here.
          </p>
        </motion.div>
      </motion.div>

      {/* Right Part Animation */}
      <motion.div className="flex gap-5 w-[38%] text-white items-center pr-20  absolute top-[40px] right-[45px] z-[30] ">
        <div className="w-[400px] h-[130px]">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={showCard ? "card" : ""}
            variants={Variant1}
            src={bulding3}
            alt="Building Image"
            className="w-full h-full object-cover rounded-3xl"
            whileHover={{ scale: 1.1 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={showCard ? "card" : ""}
          variants={Variant1}
          className="text-white"
        >
          <p>
            This is some content that goes beside the image. You can add text,
            buttons, or any other elements here.
          </p>
        </motion.div>
      </motion.div>
      {/* </div> */}
    </div>
  );
}

export default ExampleComponent;
