import React from 'react'
import building1 from '../images/building1.jpg'
import { buildingData } from '../data/building-data'
import BuildingCard from './BuildingCard'
import { motion } from 'framer-motion'

const BuildingSection = () => {
  return (
    <div className='h-full '>



      {/* -------------- container ------------ */}

      <div className='w-[95%]   mx-auto  flex justify-between h-[780px]  gap-12 relative'>

        {/* -------------- left part ---------------- */}

        <div className='w-[48%] curve-1 curve-2 relative  px-2 bg-black '>

          <img src={building1} alt="" className='w-full h-full object-fill rounded-[40px] relative ' />
          <div className='absolute bottom-0 right-0 w-[460px] h-[130px] bg-black z-[15] rounded-tl-[40px]'></div>



        </div>

        {/* --------- large text --------- */}

        <motion.div
          initial={{ x: -400, opacity:0}}
          whileInView={{ x:-30 , opacity:1}}
          transition={{ duration: 0.9  }}
          className='absolute z-[20] text-8xl uppercase   text-white left-[280px] bottom-[30px] tracking-widest'>
          Individual Building
        </motion.div>


        {/* -------------- right part --------------------- */}

        <div className='w-[50%]   flex flex-col gap-y-6 px-12'>

          {
            buildingData.map((data , index) => (
              <BuildingCard data={data} index={index} key={data.id} />
            ))
          }




        </div>

      </div>



    </div>
  )
}

export default BuildingSection