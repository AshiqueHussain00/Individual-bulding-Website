// import React from "react";
import '/src/index.css';
import bulding2 from "/src/images/building2.jpg";
import bulding3 from "/src/images/building3.jpg";

function ExampleComponent() {
  return (
    <div className="pt-16">
      {/* <div className="flex absolute justify-center z-40  m-auto left-0 right-0 top-0 ">
        <div className="...">
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white z-40">
            <span className="text-lg font-semibold">LEARN MORE</span>
          </div>
        </div>
      </div> */}
      <div className="back-element flex justify-center bg-white/30 gap-96 p-12 absolute rounded-custom-80 z-30">
      <div className="back-element1"><div className='back-element3'></div> <div className='back-element2'></div></div>
        <div className="flex bg-transparent  rounded-lg overflow-hidden">
          <img
            src={bulding2}
            alt="Placeholder Image"
            className="w-auto h-36 object-cover rounded-3xl"
          />
          <div className="..">
            <p className="text-white">
              This is some content that goes beside the image. You can add text,
              buttons, or any other elements here.
            </p>
          </div>
        </div>
        <div className="flex bg-transparent rounded-lg overflow-hidden ">
          <img
            src={bulding3}
            alt="Placeholder Image"
            className="w-96 h-36 object-cover rounded-3xl "
          />
          <div className="..">
            <p className="text-white ">
              This is some content that goes beside the image. You can add text,
              buttons, or any other elements here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleComponent;
