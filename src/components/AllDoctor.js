import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { BiSolidShoppingBag } from "react-icons/bi";
import { IoIosCalendar } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

const AllDoctor = () => {

  const [filteredBookings, setFilteredBookings] = useState([]);
  useEffect(()=>{
      const fetchData = async() =>{
       // const response = await axios.post('​https://doctors-backend-ztcl.onrender.com/getallbookings',{})
       const data = await fetch("https://doctors-backend-ztcl.onrender.com/users",
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({ }),
         }
       );
       const dataResponse = await data.json()
   
       console.log(dataResponse);
   
       const storedId = localStorage.getItem('userId');
       if (storedId) {
          // Filter bookings based on both type and _id matching storedId
          const matchedBookings = dataResponse.filter(el => el.type === "doctor" );
          console.log('Matched bookings:', matchedBookings);
      
          setFilteredBookings(matchedBookings);
      }
  
       console.log(filteredBookings);
      }
      fetchData()
     },[])
  const [data, setData] = useState([
    {
      id: 1,
      name: "Dr. Wanitha ",
      image: "/doctor1.png",
      degree: "Dentist",
      clinicName: "Smile clinic",
      availableDays: "Mon, Wed, Thu, Fri, Sat",
      location: "america",

    },
    {
      id: 2,
      name: "Dr. John Doe",
      image: "/doctor1.png",
      degree: "MBBS",
      clinicName: "Health ",
      availableDays: "Mon, Wed, Thu, Fri, Sat",
      location: "america",

    },
    {
      id: 3,
      name: "Dr. Wanitha",
      image: "/doctor1.png",
      degree: "Dentist",
      clinicName: "Life Care",
      availableDays: "Mon, Wed, Thu, Fri, Sat",
      location: "america",

    },
    {
      id: 4,
      name: "Dr. Emily",
      image: "/doctor1.png",
      degree: "eye specialist",
      clinicName: "jkf",
      availableDays: "Mon, Wed, Thu, Fri, Sat",
      location: "jkk",

    },
  ]);

  const [filteredData, setFilteredData] = useState(filteredBookings);
  const [searchDoctor, setSearchDoctor] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchGender, setSearchGender] = useState('');
  const [searchSpecialist, setSearchSpecialist] = useState('');

  useEffect(() => {
    let filtered = filteredBookings;

    if (searchDoctor) {
      filtered = filtered.filter(doctor =>
        doctor.name.toLowerCase().includes(searchDoctor.toLowerCase())
      );
    }

    if (searchLocation) {
      filtered = filtered.filter(doctor =>
        doctor.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    if (searchSpecialist) {
      filtered = filtered.filter(doctor =>
        doctor.degree.toLowerCase().includes(searchSpecialist.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [searchDoctor, searchLocation, searchGender, searchSpecialist, filteredBookings]);

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
                  <div >{el?.services.specialities}</div>
                  <div className="text-[#007569]  text-sm font-bold">{el?.specialty}</div>
                  <p className="text-yellow-500 text-xl ">★★★★★</p>
                  <div className=' flex gap-2 '>
                    <FaRegHeart className='border-[0.5px] border-gray-600 rounded-sm p-1 text-xl' /><span> Add to favourites</span>
                  </div>
                </div>
              </div>
              <div className='space-y-2'>
                <div className='flex gap-2'> <IoIosCalendar className='mt-1 text-gray-700' /> {el?.availableDays}</div>
                <div className='flex gap-2'> <GrLocation className='mt-1 font-bold text-gray-700' />{el?.feedbackCount} Feedbacks</div>
                <div className='flex gap-2 text-[#007569]'> <IoClipboardOutline className='mt-1 font-bold text-gray-700' />Available Now</div>
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
