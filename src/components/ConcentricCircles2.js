


import React from 'react';

function ConcentricCircles2() {
  return (
    <div className="absolute hidden md:inline-block lg:top-[720px] md:top-[800px] -left-[200px] overflow-hidden">
      <div className="relative w-[440px] h-[440px] rounded-full bg-[#f0efef]">
        <div className="absolute w-[380px] h-[380px] rounded-full bg-white top-[30px] left-[30px]"></div>
        <div className="absolute w-[310px] h-[310px] rounded-full bg-[#c8f6f1] top-[60px] left-[60px]"></div>
        <div className="absolute w-[240px] h-[240px] rounded-full bg-white top-[100px] left-[100px]"></div>
        <div className="absolute w-[160px] h-[160px] rounded-full bg-[#d5d7d7] top-[140px] left-[140px]"></div>
      </div>
    </div>
  );
}

export default ConcentricCircles2;
