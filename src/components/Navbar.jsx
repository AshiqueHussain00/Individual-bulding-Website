import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { NavbarLinks } from '../data/navbar-links';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Path data for separate top and bottom lines
const pathDataTop = `
  M2,0
  H95%
`;

const pathDataBottom = `
  M98,41
  H2
`;

const borderDraw = {
  hidden: { pathLength: 0, strokeWidth: 0 },
  visible: {
    pathLength: 1,
    strokeWidth: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const Navbar = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: false, // Ensure animations repeat
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  // Reset animation state whenever inView changes
  React.useEffect(() => {
    if (inView) {
      entry.target.style.animation = 'none';
      void entry.target.offsetHeight; // Trigger reflow to restart animation
      entry.target.style.animation = null;
    }
  }, [inView, entry]);

  return (
    <div className=" z-20 p-6 sticky top-0 z-[999999]">
      <div className="relative ">
        <svg
          className="absolute inset-0"
          width="98%"
          height="89.6" // Fixed height for the SVG
          viewBox="0 0 100 89.6" // Use percentage units to cover full width
          preserveAspectRatio="none"
          ref={ref} // Attach the ref from useInView
        >
          {/* Top line */}
          <motion.path
            d={pathDataTop}
            fill="none"
            stroke="#ffffff"
            variants={borderDraw}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'} // Animate when in view
          />
          {/* Bottom line */}
          <motion.path
            d={pathDataBottom}
            fill="none"
            stroke="#ffffff"
            variants={borderDraw}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'} // Animate when in view
          />
        </svg>

        <div className="relative z-10 flex justify-between bg-transparent rounded-full">
          <ul className="flex items-center">
            {NavbarLinks.map((link) => (
              <li key={link.id} className="list border border-white rounded-full p-2 w-40 flex items-center justify-center">
                <a
                  href={link.path}
                  className="text-white hover:text-gray-400 flex items-center justify-center rounded-full capitalize"
                >
                  {link.name}
                  {link.icon && <span className="ml-2">{link.icon}</span>}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center">
            <li className="border border-white rounded-full p-3 flex items-center justify-center">
              <a href="">
                <BsTelephone color="white" />
              </a>
            </li>
            <li className="text-black bg-white border border-white rounded-full p-2 capitalize w-40 flex items-center justify-center">
              <a href="#" className="flex items-center justify-center">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
