// import React from 'react'

// function ConcentricCircles2() {
//     return (
//         <div className="relative flex justify-center items-center w-full h-full">
//             <div className="absolute w-[40vw] h-[40vw] max-w-[400px] max-h-[400px]  bg-[#efecec] rounded-full"></div>
//             <div className="absolute w-[35vw] h-[35vw] max-w-[350px] max-h-[350px] bg-white rounded-full"></div>
//             <div className="absolute w-[28vw] h-[28vw] max-w-[280px] max-h-[280px] bg-[#9ad9d3] rounded-full"></div>
//             <div className="absolute w-[22vw] h-[22vw] max-w-[220px] max-h-[220px] bg-white rounded-full"></div>
//             <div className="absolute w-[16vw] h-[16vw] max-w-[160px] max-h-[160px] bg-[#639691] rounded-full"></div>

//         </div>
//     )
// }

// export default ConcentricCircles2
function ConcentricCircles2() {
    return (
      <svg className="absolute overflow-hidden hidden md:inline-block lg:top-[720px] md:top-[800px] -left-60" width={800} height={900}>
        <circle cx="200" cy="200" r="220" fill="#efecec" />
        <circle cx="200" cy="200" r="190" fill="white" />
        <circle cx="200" cy="200" r="160" fill="#9ad9d3" />
        <circle cx="200" cy="200" r="120" fill="white" />
        <circle cx="200" cy="200" r="80" fill="#639691" />
      </svg>
    );
  }
  
  export default ConcentricCircles2;
  
