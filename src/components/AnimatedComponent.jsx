import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";

function ExitAndEnterAnimation() {
  const [removeInnerCircle, setRemoveInnerCircle] = useState(false);

  useEffect(() => {
    setTimeout(() => setRemoveInnerCircle(true), 2000);
  });

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <AnimatePresence>
          {removeInnerCircle === false && (
            <motion.div
              initial={{ opacity: 0.2, y: 300 }}
              animate={{
                opacity: 1,
                y: 0,

                transition: {
                  duration: 0.5,
                  
                },
              }}
              exit={{
                opacity: 0,
                y: -350,
                x: -750,
                scale: [null, 0.1],
                transition: { duration: 0.8},
              }}
            >
              <h1 className="font-bold text-8xl text-white">SHAPE</h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ExitAndEnterAnimation;
