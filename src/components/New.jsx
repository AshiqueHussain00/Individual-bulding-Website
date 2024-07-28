import React from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import './BackgroundScrollAnimation.css'; // Import your CSS

const BackgroundScrollAnimation = () => {
  const { scrollYProgress } = useViewportScroll();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => setScrollY(value));
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="container">
      <motion.div
        className="background"
        style={{
          backgroundPositionX: scrollY * 100 + '%', // Adjust this to suit your needs
        }}
      >
        <div className="content">
          <h1>Scroll to see the effect</h1>
          <p>Some content here</p>
        </div>
      </motion.div>
    </div>
  );
};

export default BackgroundScrollAnimation;