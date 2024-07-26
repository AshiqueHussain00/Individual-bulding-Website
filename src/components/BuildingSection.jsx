import React from 'react'
import building1 from '../images/building1.jpg'
import { buildingData } from '../data/building-data'
import BuildingCard from './BuildingCard'

const BuildingSection = () => {
  return (
    <div className='h-full '>



      {/* -------------- container ------------ */}

      <div className='w-[95%]   mx-auto  flex justify-between h-[650px]  gap-12 relative'>

        {/* -------------- left part ---------------- */}

        <div className='w-[48%] curve-1 curve-2 relative  px-2 bg-black'>

          <img src={building1} alt="" className='w-full h-full object-cover rounded-[40px] ' />
          <div className='absolute bottom-0 right-0 w-[460px] h-[130px] bg-black z-[10] rounded-tl-[40px]'></div>



        </div>

        {/* --------- large text --------- */}

        <div className='absolute z-[20] text-7xl uppercase   text-white left-[280px] bottom-[30px] tracking-widest'>
          Individual Building
        </div>


        {/* -------------- right part --------------------- */}

        <div className='w-[45%]   flex flex-col gap-y-6 px-8'>

          {
            buildingData.map((data)=> (
              <BuildingCard data={data} key={data.id}/>
            ))
          }




        </div>

      </div>



    </div>
  )
}

export default BuildingSection