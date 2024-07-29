import React from "react";
import { IoKeyOutline, IoHeartOutline, IoBagOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';



const HeroSection = () => {

    const iconData = [

        {
            id: 1,
            icon: <IoKeyOutline />
        },
        {
            id: 2,
            icon: <IoHeartOutline />
        },
        {
            id: 3,
            icon: <IoBagOutline />
        },

    ]

    const ref = useRef(null);


    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [animateBelow, setAnimateBelow] = useState(false)

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
            }, 700); //0.7 seconds delay

            timer2 = setTimeout(() => {
                setAnimateBelow(true)
            }, 900)


        } else {
            setShouldAnimate(false)
            setAnimateBelow(false)
        }

        return () => clearTimeout(timer, timer2);
    }, [isInView]);


    const Variant1 = {

        come: {
            x: 0,
            opacity: 1,
            transition: {

                duration: 1.5,
            }
        },

        anime: {
            x: 0,
            opacity: 1,
            transition: {

                delay: 0.5,
                duration: 1.5,
            }
        },
        up: {

            y: 0,
            opacity: 1,
            transition: {
                delay: 0.8,
                duration: 0.8,
            }

        }

    }

    const Variant2 = {

        icons: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.5,
                duration: 0.7,

            }
        })

    }

    return (
        <div ref={ref} className="bg-black-800 text-white p-6 w-[90%] mx-auto">
            <h1

                className="text-4xl md:text-5xl lg:text-[86px] font-Neutralface mb-6 flex flex-col gap-y-2 ">
                <motion.span
                    initial={{ x: -500, opacity: 0 }}
                    animate={
                        shouldAnimate ? "come" : ""
                    }
                    variants={Variant1}
                    className="block "

                >INDIVIDUAL BUILDING</motion.span>
                <br />
                <motion.span
                    initial={{ x: -500, opacity: 0 }}
                    animate={
                        animateBelow ? "come" : ""
                    }
                    variants={Variant1}
                    className="text-center block ">FOR YOUR LIFE</motion.span>
            </h1>
            <div className="flex items-center pt-5">
                <motion.p
                    initial={{ y: -30, opacity: 0 }}
                    animate={
                        animateBelow ? "up" : ""
                    }
                    variants={Variant1}

                    className="text-sm md:text-base sm:text-sm flex-grow">
                    We are a team of professionals who use <br />
                    successful experience in the <br />
                    implementation of projects of various<br />
                    levels of complexity and scale
                </motion.p>

                <div className="flex justify-end ml-5">

                    <div className="flex flex-col gap-y-3">
                        {
                            iconData.map((data, index) => (
                                <motion.div
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={
                                        shouldAnimate ? "icons" : ""
                                    }
                                    custom={index}
                                    variants={Variant2}
                                    key={data.id} className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-black text-lg">


                                    {data.icon}
                                    
                                </motion.div>


                            ))
                        }


                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HeroSection;