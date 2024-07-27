import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";
import { FiArrowDownLeft } from "react-icons/fi";


const BuildingCard = ({ data }) => {
    return (
        <div className={`w-full  flex gap-x-8  py-6 px-4 bg-white rounded-[20px] text-black
        ${data.id % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }
    `}>

            <div className='w-[280px] h-[170px]'>
                <img src={data.image} alt="buildings" className='w-full h-full object-cover rounded-[20px]' />
            </div>

            <div className='text-lg pt-4'>
                {data.desc}
            </div>




        </div>
    )
}

export default BuildingCard