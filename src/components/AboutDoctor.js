
import { useState, useEffect } from 'react';
import { MdOutlineVerified } from "react-icons/md";
import { FaRegHeart, FaUserAlt } from "react-icons/fa";
import { BiSolidShoppingBag } from "react-icons/bi";
import { IoIosCalendar } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import FeedbackModal from './FeedbackPopUp';
import { useParams, Link } from 'react-router-dom';

const doctors = [
    {
        id: 1,
        name: "Dr. Wanitha",
        degree: "Dentist",
        clinicName: "Smile clinic",
        service: "MBBS",
        specialty: "Specialty",
        image: "/doctor1.png",
        availableDays: "Mon, Wed, Thu, Fri, Sat",
        feedbackCount: 3,
        location: "America",
        experience: "12+ Years Of experience",
        patientsTreated: 3,
    },
    {
        id: 2,
        name: "Dr. John Doe",
        degree: "Dentist",
        clinicName: "Health",
        service: "MBBS",
        specialty: "Neurologist",
        image: "/doctor1.png",
        availableDays: "Mon, Wed, Thu, Fri, Sat",
        feedbackCount: 3,
        location: "America",
        experience: "14+ Years Of experience",
        patientsTreated: 3,
    },
    {
        id: 3,
        name: "Dr. Wanitha",
        degree: "Dentist",
        clinicName: "Life Care",
        service: "MBBS",
        specialty: "Specialty",
        image: "/doctor1.png",
        availableDays: "Mon, Wed, Thu, Fri, Sat",
        feedbackCount: 3,
        location: "America",
        experience: "7+ Years Of experience",
        patientsTreated: 3,
    },
    {
        id: 4,
        name: "Dr. Emily",
        degree: "Dentist",
        clinicName: "Smile clinic",
        service: "MBBS",
        specialty: "Specialty",
        image: "/doctor1.png",
        availableDays: "Mon, Wed, Thu, Fri, Sat",
        feedbackCount: 3,
        location: "America",
        experience: "2+ Years Of experience",
        patientsTreated: 3,
    },
];



const dummyReviews = [
    {
        recommend: true,
        friendliness: 5,
        feedbackText: "Dr. Wanitha is very friendly and professional. Highly recommended!",
    },
    {
        recommend: true,
        friendliness: 4,
        feedbackText: "Great experience with Dr. John Doe. Very knowledgeable.",
    },
    {
        recommend: false,
        friendliness: 3,
        feedbackText: "Dr. Emily was okay, but the waiting time was too long.",
    },
];

function AboutDoctor() {
    const { id } = useParams();
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [activeTab, setActiveTab] = useState('about');
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [feedbacks, setFeedbacks] = useState([...dummyReviews]);

      const [filteredBookings, setFilteredBookings] = useState([]);
      const localID = localStorage.getItem('userId');
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
   
   
       const storedId = localStorage.getItem('userId');
       if (storedId) {
          // Filter bookings based on both type and _id matching storedId
          const matchedBookings = dataResponse.filter(el => el._id === id );
       
      
          setFilteredBookings(matchedBookings);
      }
  
    
      }
      fetchData()
     },[filteredBookings])

    useEffect(() => {
        const doctor = doctors.find(doc => doc.id === id);
        setSelectedDoctor(doctor);
    }, [id]);

 

    const openFeedbackModal = () => {
        setShowFeedbackModal(true);
    };

    const closeFeedbackModal = () => {
        setShowFeedbackModal(false);
    };

    const handleFeedbackSubmit = (feedback) => {
        setFeedbacks(prevFeedbacks => [...prevFeedbacks, feedback]);
    };

    return (
        <>
            <div className='w-[80%] mx-auto'>
                <section className='lg:flex lg:flex-row lg:mx-auto md:mx-10 grid grid-cols-1 bg-white p-4 gap-2 rounded-lg border-[1px] border-[#BABABA] mx-auto justify-between'>
                    <div className='lg:w-[25%] p-2 mx-auto bg-white'>
                        <img className='h-[220px] w-[220px] rounded-md overflow-hidden bg-[#017A884D]' src={filteredBookings.map((el)=>el.profilepic)} alt='doctor' />
                    </div>
                    <div className='md:w-[20%] mx-auto text-start py-3 justify-between flex flex-col bg-white'>
                        <div className='text-2xl text-gray-600 font-bold'>{filteredBookings.map((el)=>el.firstname)}</div>
                        <div className='text-lg text-green-700'><MdOutlineVerified /></div>
                        <div>{filteredBookings.map((el)=>el.services.specialities)}</div>
                        <div className="text-[#007569] text-sm font-bold">{filteredBookings.map((el)=>el.services.specialities)}</div>
                        <p className="text-yellow-500 text-xl">★★★★★</p>
                        <div className='flex gap-2'>
                            <FaRegHeart className='border-[0.5px] border-gray-600 rounded-sm p-1 text-xl' /><span>Add to favourites</span>
                        </div>
                    </div>
                    <div className='md:w-[30%] mx-auto flex flex-col pb-4 justify-between bg-white'>
                        <div className='flex gap-3 mx-auto flex-col'>
                            <div className='flex gap-2'>
                                <FaUserAlt className='border-[0.5px] text-[#A300EF] border-[#00000040] rounded-sm p-1 text-2xl' />
                                {/* <span className='text-xl text-gray-700'>{selectedDoctor.patientsTreated} Patients Treated</span> */}
                            </div>
                            <div className='flex gap-2'>
                                <BiSolidShoppingBag className='border-[0.5px] text-[#00A31A] border-[#00000040] rounded-sm text-2xl' />
                                <span className='text-xl text-gray-700'>{filteredBookings.map((el)=>el.exp.experience)}</span>
                            </div>
                        </div>
                        <div className='flex'>
                            <button className="flex flex-col p-1 py-2 border-[1px] bg-[#F6F6F6] rounded-l-lg border-[#BABABA]">Clinic
                                <p className='px-3'>{filteredBookings.map((el)=>el.clinic)}</p>
                            </button>
                            <button className="flex flex-col p-1 py-2 border-[1px] bg-[#F6F6F6] rounded-r-lg border-[#BABABA]">Location
                                <p className='px-3'>{filteredBookings.map((el)=>el.location)}</p>
                            </button>
                        </div>
                    </div>
                    <div className='md:w-[25%] mx-auto flex gap-4 flex-col bg-white'>
                        {/* <div className='flex gap-2'><IoIosCalendar className='mt-1 text-gray-700' /> {selectedDoctor.availableDays}</div> */}
                        {/* <div className='flex gap-2'><GrLocation className='mt-1 font-bold text-gray-700' />{selectedDoctor.feedbackCount} Feedbacks</div> */}
                        <div className='flex gap-2 text-[#007569]'><IoClipboardOutline className='mt-1 font-bold text-gray-700' />Available Now</div>
                        <div className='flex gap-2'><GrLocation className='mt-1 font-bold text-gray-700' />{filteredBookings.map((el)=>el.location)}</div>
                        <div className='w-[80%] gap-1 mb-3 font-bold flex flex-row'>
                            <button className="border-[2px] border-[#276A7B] rounded-lg p-1 text-[#276a7b] w-[140px]" onClick={openFeedbackModal}>
                                Add Feedback
                            </button>
                            <button className='border-[2px] border-[#276A7B] rounded-lg p-1 bg-[#276a7b] text-white w-[140px]'>
                                <Link to={`/appointment/${id}`}>
                                    Book Appointment
                                </Link>
                            </button>
                        </div>
                        {showFeedbackModal && (
                            <FeedbackModal id={id} onClose={closeFeedbackModal} userLocalId={localID} />
                        )}
                    </div>
                </section>
            </div>
            <div>
                <div className='mt-5'>
                    <div className="w-[80%] p-4 rounded-lg border-[1px] border-[#BABABA] mx-auto justify-between'">
                        <div className='flex flex-row justify-between mx-auto w-[80%] text-4xl'>
                            <button
                                className={`px-4 w-full py-2 font-semibold ${activeTab === 'about' ? 'text-[#007569] border-b-2 border-[#007569]' : 'text-gray-500 border-b-2 border-[#BABABA]'}`}
                                onClick={() => setActiveTab('about')}
                            >
                                About
                            </button>
                            <button
                                className={`px-4 w-full py-2 font-semibold ${activeTab === 'review' ? 'text-[#007569] border-b-2 border-[#007569]' : 'text-gray-500 border-b-2 border-[#BABABA]'}`}
                                onClick={() => setActiveTab('review')}
                            >
                                Review
                            </button>
                        </div>
                        <div className="mt-4">
                            {activeTab === 'about' && (
                                <div className="p-4 rounded-lg">
                                    <h2 className="text-xl pb-10 font-bold">About {filteredBookings.map((el)=>el.firstname)}</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            )}
                            {activeTab === 'review' && (
                                <div className="p-4 h-[200px] rounded-lg">
                                    <div className='overflow-y-scroll h-full'>
                                        <h2 className="text-xl pb-10 font-bold">Review</h2>
                                        {feedbacks.length === 0 ? (
                                            <p>No feedback yet.</p>
                                        ) : (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {feedbacks.map((feedback, index) => (
                                                    <div key={index} className="border-b pb-4 mb-4 flex items-start space-x-4">
                                                        <div className='flex'>
                                                            <img src="/login.png" alt='profile' className='h-[35px] rounded-full w-[35px]' />
                                                            <div>
                                                                <p className='text-gray-700 font-semibold text-sm'>Name</p>
                                                                <p className='text-yellow-500'>{'★'.repeat(feedback.friendliness)}</p>
                                                                <p>{feedback.feedbackText}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutDoctor;
