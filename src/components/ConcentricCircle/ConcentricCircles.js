
import React from 'react';

const ConcentricCircles = ({ imageUrl }) => {
  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <div className="absolute w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-gray-300 rounded-full"></div>
      <div className="absolute w-[35vw] h-[35vw] max-w-[350px] max-h-[350px] bg-white rounded-full"></div>
      <div className="absolute w-[28vw] h-[28vw] max-w-[280px] max-h-[280px] bg-[#51E3D4] rounded-full"></div>
      <div className="absolute w-[22vw] h-[22vw] max-w-[220px] max-h-[220px] bg-white rounded-full"></div>
      <div className="absolute w-[16vw] h-[16vw] max-w-[160px] max-h-[160px] bg-[#007569] rounded-full"></div>
      <div className="absolute md:w-[350px]  overflow-hidden bg-darkgreen-500 rounded-full flex justify-center items-center">
        {imageUrl && (
          <img
            src={imageUrl}
            className="md:h-[350px] h-[160px]  md:pt-6 transform scale-x-[-1] w-fit "
            alt="doctor"
          />
        )}
      </div>
    </div>
  );
};

export default ConcentricCircles;


