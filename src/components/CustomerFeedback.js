// import React, { useEffect, useState } from 'react';

// // Sample data
// const feedbackData = [
//   { id: 1, name: 'John Doe', image: 'customer1.png'},
//   { id: 2, name: 'Jane Smith', image: 'customer2.png'},
//   { id: 3, name: 'Sam Wilson', image: 'customer3.png'},
//   // Additional customers can be added here
// ];




// const CustomerFeedback = () => {
//   const [filteredBookings, setFilteredBookings] = useState([]);
// useEffect(()=>{
// const fetchData = async() =>{
//  // const response = await axios.post('​https://doctors-backend-ztcl.onrender.com/getallbookings',{})
//  const data = await fetch("https://doctors-backend-ztcl.onrender.com/getallfeedback",
//    {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify({ }),
//    }
//  );
//  const dataResponse = await data.json()
//  const storedId = localStorage.getItem('userId');
//  setFilteredBookings(dataResponse)
// //  if (storedId) {
// //     // Filter bookings based on both type and _id matching storedId
// //     const matchedBookings = dataResponse.filter(el => el._id === id );
 

// //     setFilteredBookings(matchedBookings);
// // }

// console.log(dataResponse);


// }
// fetchData()
// },[])

// const [imageData, setImageData] = useState([]);
// useEffect(()=>{
// const fetchData = async() =>{
//  // const response = await axios.post('​https://doctors-backend-ztcl.onrender.com/getallbookings',{})
//  const data = await fetch("https://doctors-backend-ztcl.onrender.com/users",
//    {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify({ }),
//    }
//  );
//  const dataResponse = await data.json()
//  const storedId = localStorage.getItem('userId');
//  setImageData(dataResponse.map((el)=>el.profilepic))
// //  if (storedId) {
// //     // Filter bookings based on both type and _id matching storedId
// //     const matchedBookings = dataResponse.filter(el => el._id === id );
 

// //     setFilteredBookings(matchedBookings);
// // }

// console.log(dataResponse);


// }
// fetchData()
// },[])
// const number = filteredBookings.map((el)=>el.rating)
// const convertString  = parseInt(number)
//   return (
//     <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20 p-6">
//       {filteredBookings.map((customer) => (
//         <div key={customer.id} className="relative shadow-gray-600  bg-white border rounded-lg shadow-lg  transform transition-transform hover:scale-105 p-6">
//           <div className="absolute top-0 left-1/2   shadow-gray-600 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
//             <img src={imageData} alt={`${customer.name}'s feedback`} className="w-full h-full object-cover" />
//           </div>
//           <div className="pt-16 text-center">
//             <p>hel</p>
//             <h3 className="text-xl font-semibold mb-2">{customer.feedback}</h3>
//             <div className="flex justify-center mb-2">
//               {Array(3).fill().map((_, index) => (
//                 <span key={index} className="text-yellow-400 text-lg">★</span>
//               ))}
//             </div>
//             <div className="font-serif text-8xl bg-[#007569] rounded-full text-white pb-0 w-fit mx-auto h-12 p-1 ">“</div>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CustomerFeedback;

import React, { useEffect, useState, useRef } from 'react';

const CustomerFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [imageData, setImageData] = useState({});
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await fetch("https://doctors-backend-ztcl.onrender.com/getallfeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const dataResponse = await response.json();
      setFeedbacks(dataResponse);
      console.log(dataResponse);
    };

    const fetchUsers = async () => {
      const response = await fetch("https://doctors-backend-ztcl.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      const dataResponse = await response.json();
      const imageMap = {};
      dataResponse.forEach(user => {
        imageMap[user._id] = user.profilepic;
      });
      setImageData(imageMap);
      console.log(dataResponse);
    };

    fetchFeedbacks();
    fetchUsers();
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <button onClick={scrollLeft} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          ◀
        </button>
        <button onClick={scrollRight} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          ▶
        </button>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-4 p-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {feedbacks.map((feedback) => (
          <div
            key={feedback._id}
            className="relative min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] shadow-gray-600 bg-white border rounded-lg shadow-lg transform transition-transform hover:scale-105 p-6"
          >
            {/* <div className="absolute top-0 left-1/2 shadow-gray-600 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
              <img src={imageData[feedback.userId]} alt={`${feedback.name}'s feedback`} className="w-full h-full object-cover" />
            </div> */}
            <div className="pt-10 text-center">
              <h3 className="text-xl font-semibold mb-2">{feedback.feedback}</h3>
              <div className="flex justify-center mb-2">
                {Array.from({ length: feedback.rating }, (_, index) => (
                  <span key={index} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <div className="font-serif text-8xl bg-[#007569] rounded-full text-white pb-0 w-fit mx-auto h-12 p-1 ">“</div>
              <p className="text-gray-600 pb-10">{feedback.details}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .flex::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CustomerFeedback;
