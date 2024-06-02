import React, { useRef } from 'react';
import DoctorCard from './DoctorCard'; // Assuming DoctorCard is in the same directory or adjust the path accordingly
import doctors from '../constant/doctorarray';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const ScrollingDoctor = () => {


    const containerRef = useRef(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative p-7 md:w-[80%] w-full md:mx-auto mt-10">
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border  border-gray-300 rounded-full shadow-md p-2 z-10"
                onClick={scrollLeft}
            >
              < IoIosArrowBack className='bg-[#00756933] w-full h-full text-[#007569] rounded-full text-2xl'/>
            </button>
            <div
                ref={containerRef}
                className="flex overflow-x-hidden space-x-4 p-4"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {doctors.map((doctor) => (
                    <div key={doctor.id} style={{ flex: '0 0 auto', scrollSnapAlign: 'start' }}>
                        <DoctorCard doctor={doctor} />
                    </div>
                ))}
            </div>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow-md p-2 z-10"
                onClick={scrollRight}
            >
               <IoIosArrowForward className='bg-[#00756933] w-full h-full text-[#007569] rounded-full text-2xl'/>
            </button>
        </div>
    );
};
export default ScrollingDoctor;
