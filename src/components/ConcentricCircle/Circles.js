import React from 'react'

function Circles() {

    function Circle1() {
        return (
            <>
                <div className=" hidden md:inline-block relative w-[400px] h-[400px] top-[-800px] left-[800px] z-[-50]  bg-[#78FFF14D] rounded-full"></div>
            </>
        )
    }
    return (
        <>

            <div className=" hidden md:inline-block relative w-[400px] h-[400px] top-[-900px] left-[-100px] z-[-50]  bg-[#78FFF14D] rounded-full"></div>
            <Circle1 />
        </>
    )
}

export default Circles