// import React from "react";

import background_image from "/src/images/background_div.png";
import bulding2 from "/src/images/building2.jpg";
import bulding3 from "/src/images/building3.jpg";

function ExampleComponent() {
  return (
    <div >


      {/* ---------- container ------------------- */}
      <div className=''>
        <img 
        src={background_image} 
        alt='Background Image'
        className="z-20 absolute"
        
        ></img>

        <div className=" back-element flex p-10 justify-between  absolute  z-30">


          {/* ------------------------- left part ------------------------ */}

          <div className="flex bg-transparent w-[38%] gap-5 items-center pr-20">

            <div className='w-[400px] h-[130px] '>

              <img
                src={bulding2}
                alt="Placeholder Image"
                className="w-full h-full object-cover rounded-3xl "
              />
            </div>

            <div className="..">
              <p className="text-black">
                This is some content that goes beside the image. You can add text,
                buttons, or any other elements here.
              </p>
            </div>
          </div>



          {/* ------------------ right part ------------------------- */}


          <div className="flex gap-5 bg-transparent w-[38%] items-center pr-20 ">

            <div className='w-[400px] h-[130px]  '>


              <img
                src={bulding3}
                alt="Placeholder Image"
                className=" w-full h-full object-cover rounded-3xl"
              />
            </div>

            <div className="..">
              <p className="text-black ">
                This is some content that goes beside the image. You can add text,
                buttons, or any other elements here.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleComponent;
