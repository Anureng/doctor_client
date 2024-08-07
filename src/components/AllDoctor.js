import React, { useState, useEffect } from 'react';
import { useSavedDoctors } from '../SavedDoctorsContext';
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { IoClipboardOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

const AllDoctor = () => {

  const [filteredBookings, setFilteredBookings] = useState([]);
  const { saveDoctor, removeSavedDoctor, isDoctorSaved } = useSavedDoctors();
  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios.post('​https://doctors-backend-ztcl.onrender.com/getallbookings',{})
      const data = await fetch("https://doctors-backend-ztcl.onrender.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );
      const dataResponse = await data.json()

      console.log(dataResponse);

      // const storedId = localStorage.getItem('userId');
      // if (storedId) {
      //   // Filter bookings based on both type and _id matching storedId
      //   const matchedBookings = dataResponse.filter(el => el.type === "doctor");
      //   console.log('Matched bookings:', matchedBookings);

      //   setFilteredBookings(matchedBookings);
      // }

     

      const storedId = localStorage.getItem('userId');
      if (storedId) {
        // Filter bookings based on both type and _id matching storedId
        const matchedBookings = dataResponse.filter(el => el.type === "doctor" && el.Approved);
        const set = dataResponse.filter(el => el.Approved)
        if( set){
        setFilteredBookings(matchedBookings);
        }
      }


    }
    fetchData()
  }, [])


  const [filteredData, setFilteredData] = useState(filteredBookings);
  const [searchDoctor, setSearchDoctor] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchGender, setSearchGender] = useState('');
  const [searchSpecialist, setSearchSpecialist] = useState('');

  useEffect(() => {
    let filtered = filteredBookings;

    if (searchDoctor) {
      filtered = filtered.filter(doctor =>
        doctor.firstname.toLowerCase().includes(searchDoctor.toLowerCase())
      );
    }

    if (searchLocation) {
      filtered = filtered.filter(doctor =>
        doctor.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    if (searchSpecialist) {
      filtered = filtered.filter(doctor =>
        doctor.services.specialities.toLowerCase().includes(searchSpecialist.toLowerCase())
      );
    }
    if (searchGender) {
      filtered = filtered.filter(doctor =>
        doctor.gender.toLowerCase().includes(searchGender.toLowerCase())
      );
    }
    

    setFilteredData(filtered);
  }, [searchDoctor, searchLocation, searchGender, searchSpecialist, filteredBookings]);


  const toggleSaveDoctor = (doctor) => {
    if (isDoctorSaved(doctor.id)) {
      removeSavedDoctor(doctor.id);
    } else {
      saveDoctor(doctor);
    }
  };

  return (
    <div>
      <div className='flex items-center justify-center flex-col'>
        <p className='text-[#007569] text-3xl font-semibold'>Our Doctors</p>
        <p className='text-[#007569] md:text-xl text-center'>
          Great doctor if you need your family member to get effective immediate <br />
          assistance, emergency treatment or a simple consultation
        </p>
      </div>

      <div className='flex justify-evenly p-4 lg:p-0 mt-10 mb-10 flex-col lg:flex-row space-y-5 md:space-y-0'>
        <div className='flex flex-col lg:w-96 h-fit border p-4 rounded-lg space-y-4'>
          <p>Search Filter</p>
          <input
            type='text'
            className='border focus:outline-none p-1'
            placeholder='Search Doctor'
            value={searchDoctor}
            onChange={e => setSearchDoctor(e.target.value)}
          />
          <label className='w-fit'>Location</label>
          <input
            type='text'
            className='border focus:outline-none p-1'
            placeholder='Search Location'
            value={searchLocation}
            onChange={e => setSearchLocation(e.target.value)}
          />
          <label className='w-fit'>Gender</label>
          <input
            type='text'
            className='border focus:outline-none p-1'
            placeholder='Search Gender'
            value={searchGender}
            onChange={e => setSearchGender(e.target.value)}
          />
          <label className='w-fit'>Specialist</label>
          <input
            type='text'
            className='border focus:outline-none p-1'
            placeholder='Search Specialist'
            value={searchSpecialist}
            onChange={e => setSearchSpecialist(e.target.value)}
          />
          <button className='bg-[#007569] text-white rounded-lg px-2 py-1'>Search</button>
        </div>

        <div className='lg:w-3/5 space-y-6 overflow-hidden overflow-y-scroll h-[34rem] no-scrollbar'>
          {filteredData.map((el) => (
            <div key={el.id} className='flex items-center justify-between border p-4 rounded-lg'>
              <div className='flex items-center'>
                <div className='  p-2 mx-auto bg-white'>
                  <img className='h-[220px] w-[220px]  rounded-md overflow-hidden  bg-[#017A884D]' src={el?.profilepic} alt='doctor' />
                </div>
                <div className=' mx-auto text-start  py-3 justify-between flex flex-col bg-white'>
                  <div className=' textxl md:text-2xl text-gray-600 font-bold'>{el?.firstname}</div>
                  <div className='text-lg text-green-700'><MdOutlineVerified /></div>

                  <div className="text-[#007569]  text-sm font-bold">{el?.services?.specialities}</div>
                  <p className="text-yellow-500 text-xl ">★★★★★</p>
                  <div onClick={() => toggleSaveDoctor(el)} className=' flex gap-2  '>
                    <FaHeart className={`border-[0.5px] border-gray-600 rounded-sm p-1 text-xl ${isDoctorSaved(el.id) ? 'text-red-500' : 'text-black'}`} />
                    <span>{isDoctorSaved(el.id) ? 'Remove from favourites' : 'Add to favourites'}</span>
                  </div>
                </div>
              </div>
              <div className='space-y-2'>
                {/* <div className='flex gap-2'> <IoIosCalendar className='mt-1 text-gray-700' />
                  <p className='flex space-x-1'>{el?.availability.days.map((el) => (
                    <p>{el}</p>
                  ))}</p></div> */}
                <div className='flex gap-2'> <GrLocation className='mt-1 font-bold text-gray-700' />{el?.feedbackCount} Feedbacks</div>
                <div className='flex gap-2 text-[#007569]'> <IoClipboardOutline className='mt-1 font-bold text-gray-700' />
                {
                  el.Available === "true"?(
                    <p> Available Now</p>
                  ):(
                    <p>Not Available</p>
                  )
                }
               </div>
                <div className='flex gap-2'> <GrLocation className='mt-1 font-bold text-gray-700' />{el?.location}</div>
                <Link to={`/doctors/profile/${el._id}`}>
                  <button className='border border-[#007569] text-sm md:text-md text-[#007569] px-1 md:py-2 py-1 rounded-md'>View Profile</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDoctor;
