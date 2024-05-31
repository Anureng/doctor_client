import React, { useState, useEffect } from 'react';

const AllDoctor = () => {
  const [data, setData] = useState([
    {
      id:1,
      name: "guf",
      degree: "Dentist",
      clinicName: "kugif",
      available: ["mon", "wed", "thus", "sun"],
      location: "america",
      available: "true",
    },
    {
      id:2,
      name: "gu",
      degree: "goi",
      clinicName: "gilllglg",
      available: ["mon", "wed", "thus", "sun"],
      location: "ifiiyfyf",
      available: "true",
    },
    {
      id:3,
      name: "guf",
      degree: "Dentist",
      clinicName: "kugif",
      available: ["mon", "wed", "thus", "sun"],
      location: "america",
      available: "true",
    },
    {
      id:4,
      name: "jfkfk",
      degree: "ggoogo",
      clinicName: "jkf",
      available: ["mon", "wed", "thus", "sun"],
      location: "jkk",
      available: "true",
    },
  ]);

  const [filteredData, setFilteredData] = useState(data);
  const [searchDoctor, setSearchDoctor] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchGender, setSearchGender] = useState('');
  const [searchSpecialist, setSearchSpecialist] = useState('');

  useEffect(() => {
    let filtered = data;

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
  }, [searchDoctor, searchLocation, searchGender, searchSpecialist, data]);

  return (
    <div>
      <div>
        <p className='text-[#007569] text-3xl font-semibold'>Our Doctors</p>
        <p className='text-[#007569] text-xl'>
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
                <div>
                  <img src='/login.png' alt='Loading...' className='md:w-72 md:h-72' />
                </div>
                <div className='w-fit'>
                  <p>{el.name}</p>
                  <p>{el.degree}</p>
                  <p>{el.clinicName}</p>
                  <p>⭐⭐⭐⭐⭐⭐</p>
                  <p>{el.location}</p>
                </div>
              </div>
              <div className='space-y-2'>
                <p>{el.name}</p>
                <p>{el.degree}</p>
                <p>{el.clinicName}</p>
                <p>{el.location}</p>
                <button className='border px-1 py-2 rounded-xl'>View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDoctor;
