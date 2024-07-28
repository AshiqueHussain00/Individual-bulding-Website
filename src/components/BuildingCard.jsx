import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";
import { FiArrowDownLeft } from "react-icons/fi";
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';



const BuildingCard = ({ data, index }) => {

    // For delay ater InView condtion
    const ref = useRef(null);

   
    const [shouldAnimate, setShouldAnimate] = useState(false);

    const isInView = useInView(ref, {
        threshold: 0.5,
        triggerOnce: false,
    });



    useEffect(() => {

        let timer;
        if (isInView) {
            timer = setTimeout(() => {
                setShouldAnimate(true);
            }, 700); //1.7 seconds delay  
        } else {
            setShouldAnimate(false)
        }

        return () => clearTimeout(timer);
    }, [isInView]);


    //Variants

    const Variant1 = {

        show: (i) => ({
            y: 10,
            backgroundColor: ["#fff"],
            transition: {
                delay: i * 0.3,
                duration: 0.7,
                times: [0.2, 0.8, 0.7, 0.9],
                when: "beforeChildren",
                staggerChildren: 0.3,
            }
        })


    }


    const Variant2 = {

        show: (i) => ({
            y: 10,
            opacity: 1,
            transition: {
                delay: i * 0.5,
                duration: 0.7,

            }
        })

    }



    return (

        // ------------ box ---------------

        <motion.div
            ref={ref}
            initial={{ y: -10, backgroundColor: "#000000", opacity: 1}}
            animate={
                shouldAnimate ? "show" : ""
            }
            custom={index}
            variants={Variant1}
            className={`w-full  flex gap-x-8  py-4 px-4 bg-white rounded-[20px] text-black relative
        ${data.id % 2 === 0 ? "flex-row-reverse" : "flex-row"
                }
    `}>


            {/* ------------ building image ------------ */}
            <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={
                    shouldAnimate ? "show" : ""
                }
                custom={index}
                variants={Variant2}
                className='w-[280px] h-[170px]'>
                <img src={data.image} alt="buildings" className='w-full h-full object-cover rounded-[20px]' />
            </motion.div>


            {/* --------------- box description ----------------- */}
            <motion.div
                initial={{ y: -10, opacity: 0 }}

                animate={
                    shouldAnimate ? "show" : ""
                }
                custom={index}

                variants={Variant2}
                className='text-lg pt-4'>
                {data.desc}
            </motion.div>

            {/* ---------------  arrrow --------------------- */}

            <motion.div
                initial={{ y: -10, opacity: 0 }}

                animate={
                    shouldAnimate ? "show" : ""
                }
                custom={index}

                variants={Variant2}
                className={`absolute bottom-[20px]
            ${data.id % 2 === 0 ? "left-[24px]" : "right-[24px]"
                    }

                `}>
                {
                    data.id % 2 === 0 ? (<FiArrowDownLeft className='text-3xl' />) : (<FiArrowDownRight className='text-3xl' />)
                }

            </motion.div>




        </motion.div>
    )
}

export default BuildingCard