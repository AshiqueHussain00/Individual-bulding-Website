import React from 'react'
import building4 from '../images/building4.jpg'
import { buildingData } from '../data/building-data'
import BuildingCard from './BuildingCard'
import { motion } from 'framer-motion'


const BuildingSection = () => {
  return (
    <div className='h-full bg-black '>



      {/* -------------- container ------------ */}

      <div


        className='w-[95%] pt-36 pb-4 mx-auto flex  justfy-between  h-[790px]  gap-12 relative'>




        {/* -------------- left part ---------------- */}

        <motion.div
          initial={{ width: "100vw", height: "100%", position: "absolute", objectFit: "cover" }}
          whileInView={{ width: "48%", height: "100%", position: "relative", objectFit: "fill" }}
          transition={{ duration: 2 }}

          className='curve-1 curve-2   px-2 bg-black '>

          <img src={building4} alt="" className='w-full h-full  rounded-[40px] z-[5] ' />
          <div className='absolute bottom-0 right-0 w-[480px] h-[130px] bg-black z-[15] rounded-tl-[40px]'></div>



        </motion.div>

        {/* --------- large text --------- */}

        <motion.div
          initial={{ x: -400, opacity: 0 }}
          whileInView={{ x: -30, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className='absolute z-[20] text-8xl uppercase   text-white left-[300px] bottom-[30px] tracking-widest'>
          Individual Building
        </motion.div>


        {/* -------------- right part --------------------- */}

        <motion.div
          initial={{ position: "absolute" }}
          whileInView={{ position: "relative" }}
          transition={{ duration: 2.5 }}
          className='w-[50%]   flex flex-col gap-y-6 px-12'>

          {
            buildingData.map((data, index) => (
              <BuildingCard data={data} index={index} key={data.id} />
            ))
          }




        </motion.div>

      </div>



    </div>
  )
}

export default BuildingSection