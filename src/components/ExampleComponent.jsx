// import React from "react";
import '/src/index.css';
import bulding2 from "/src/images/building2.jpg";
import bulding3 from "/src/images/building3.jpg";

function ExampleComponent() {
  return (
    <div className="pt-16 ">
  

      {/* ---------- container ------------------- */}
      <div className='w-[95%] mx-auto '>


        <div className="w-[95%] back-element flex justify-between bg-white/30  py-10 px-12 absolute rounded-custom-80 z-30">

          <div className="back-element1"><div className='back-element3'></div> <div className='back-element2'></div></div>


          {/* ------------------------- left part ------------------------ */}

          <div className="flex bg-transparent w-[32%] b gap-x-6 items-center">

            <div className='w-[400px] h-[130px] '>

              <img
                src={bulding2}
                alt="Placeholder Image"
                className="w-full h-full object-cover rounded-3xl "
              />
            </div>

            <div className="..">
              <p className="text-white">
                This is some content that goes beside the image. You can add text,
                buttons, or any other elements here.
              </p>
            </div>
          </div>



               {/* ------------------ right part ------------------------- */}


          <div className="flex gap-x-6 bg-transparent w-[32%] items-center">

            <div className='w-[400px] h-[130px]  '>


              <img
                src={bulding3}
                alt="Placeholder Image"
                className=" w-full h-full object-cover rounded-3xl"
              />
            </div>

            <div className="..">
              <p className="text-white ">
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
