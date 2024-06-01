import React from 'react'

function ConcentricCircle4() {
    return (
        <div className="absolute hidden md:inline-block  lg:top-[2350px] md:top-[2500px] lg:-right-36 md:-right-[290px]  overflow-hidden">
            <div className="relative w-[440px] h-[440px] rounded-full bg-[#fbfafa]">
                <div className="absolute w-[380px] h-[380px] rounded-full bg-white top-[30px] left-[30px]"></div>
                <div className="absolute w-[310px] h-[310px] rounded-full bg-[#c8f6f1] top-[60px] left-[60px]"></div>
                <div className="absolute w-[240px] h-[240px] rounded-full bg-white top-[100px] left-[100px]"></div>
                <div className="absolute w-[180px] h-[180px] rounded-full bg-[#d5d7d7] top-[130px] left-[130px]"></div>
            </div>
        </div>

    )
}

export default ConcentricCircle4