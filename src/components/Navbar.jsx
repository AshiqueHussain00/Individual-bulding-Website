import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { NavbarLinks } from '../data/navbar-links';
import { motion } from 'framer-motion'

//border motion code
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
  visible: (i) => ({
    pathLength: 1,
    strokeWidth: 1, // Ensure strokeWidth is consistent
    transition: {
      delay: i * 2, // Delay for each line
      duration: 2,
      ease: 'easeInOut',
    },
  }),
};

//navbar component
const Navbar = () => {
  return (
   
      <div className="  bg-black  z-20 p-6">
        <div className="relative bg-black">
          <svg
            className="absolute inset-0"
            width="98%"
            height="89.6" // Fixed height for the SVG
            viewBox="0 0 100 89.6" // Use percentage units to cover full width
            preserveAspectRatio="none"
          >
            {/* Top line */}
            <motion.path
              d={pathDataTop}
              fill="none"
              stroke="#ffffff"
              variants={borderDraw}
              initial="hidden"
              animate="visible"
              custom={0} // First line
            />
            {/* Bottom line */}
            <motion.path
              d={pathDataBottom}
              fill="none"
              stroke="#ffffff"
              variants={borderDraw}
              initial="hidden"
              animate="visible"
              custom={1} // Second line
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

