import React from "react";

import { IoKeyOutline,IoHeartOutline,IoBagOutline } from "react-icons/io5";
import '../App.css'; // Make sure this path is correct



const HeroSection = () => {
    return (
        <div className="bg-black-800 text-white p-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-Neutralface mb-6">
                INDIVIDUAL BUILDING<br/>
                <span className="text-center block">FOR YOUR LIFE</span>
            </h1>
            <div className="flex items-center mt-5">
    <p className="text-sm md:text-base sm:text-sm flex-grow">
        We are a team of professionals who use <br/>
        successful experience in the <br/>
        implementation of projects of various<br/>
        levels of complexity and scale
    </p>
    
    <div className="flex justify-end ml-5">
        <div className="flex flex-col space-y-1">
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                <IoKeyOutline size={15} color="black" />
            </div>
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                <IoHeartOutline size={15} color="black" />
            </div>
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                <IoBagOutline size={15} color="black" />
            </div>
        </div>
    </div>
</div>

        </div>
    );
}

export default HeroSection;