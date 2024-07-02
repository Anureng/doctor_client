
import { useState, useEffect } from 'react';
import { MdOutlineVerified } from "react-icons/md";
import { FaRegHeart, FaUserAlt } from "react-icons/fa";
import { BiSolidShoppingBag } from "react-icons/bi";
import { IoIosCalendar } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import FeedbackModal from './FeedbackPopUp';
import { useParams, Link } from 'react-router-dom';

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

    useEffect(() => {
        const fetchData = async () => {
            // const response = await axios.post('​https://doctors-backend-ztcl.onrender.com/getallbookings',{})
            const data = await fetch("https://doctors-backend-ztcl.onrender.com/getallfeedback",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
                }
            );
            const dataResponse = await data.json()
           const storedId = localStorage.getItem('userId');
            if (storedId) {
                // Filter bookings based on both type and _id matching storedId
                const matchedBookings = dataResponse.filter(el => el.doctorid === id);
                setFeedbacks(matchedBookings)
            }
}
        fetchData()
    }, [feedbacks])



    const [filteredBookings, setFilteredBookings] = useState([]);
    const localID = localStorage.getItem('userId');
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

            const storedId = localStorage.getItem('userId');
            if (storedId) {
                // Filter bookings based on both type and _id matching storedId
                const matchedBookings = dataResponse.filter(el => el._id === id);
                
                setFilteredBookings(matchedBookings);
            }
        }
        fetchData()
    }, [])


    useEffect(() => {
        const doctor = filteredBookings.find(doc => doc.id === id);
        setSelectedDoctor(doctor);
    }, [id]);



    const openFeedbackModal = () => {
        setShowFeedbackModal(true);
    };

    const closeFeedbackModal = () => {
        setShowFeedbackModal(false);
    };



    const handleSavedData = async () => {
        try {
            // Fetch users data
            const response = await fetch("https://doctors-backend-ztcl.onrender.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}),
            });
            
            const usersData = await response.json();
            console.log(usersData);
    
            // Filter bookings based on both type and _id matching storedId
            const matchedBooking = usersData.find(el => el._id === id);
            console.log(matchedBooking);
    
            if (matchedBooking) {
                const { email, firstname, lastname, location, gender, type, profilepic, language, fees, clinic } = matchedBooking;
    
                const saveResponse = await fetch("https://doctors-backend-ztcl.onrender.com/save", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        userid: localID,
                        firstname,
                        lastname,
                        Phoneno: 0,
                        location,
                        startas: "",
                        Bio: "",
                        dob: "",
                        gender,
                        address: "",
                        type,
                        profilepic,
                        bloodgroup: "",
                        description: "",
                        services: {},
                        edu: {},
                        exp: {},
                        language,
                        totalexp: "",
                        fees,
                        clinic
                    }),
                });
    
                if (saveResponse.ok) {
                    alert("Added successfully");
                } else {
                    alert("Failed to add");
                }
            } else {
                console.log("No matching booking found");
            }
        } catch (error) {
            console.log(error);
        }
    };
    



    return (
        <>
            <div className='w-[80%] mx-auto'>
                <section className='lg:flex lg:flex-row lg:mx-auto md:mx-10 grid grid-cols-1 bg-white p-4 gap-2 rounded-lg border-[1px] border-[#BABABA] mx-auto justify-between'>
                    <div className='lg:w-[25%] p-2 mx-auto bg-white'>
                        <img className='h-[220px] w-[220px] rounded-md overflow-hidden bg-[#017A884D]' src={filteredBookings.map((el) => el.profilepic)} alt='doctor' />
                    </div>
                    <div className='md:w-[20%] mx-auto text-start py-3 justify-between flex flex-col bg-white'>
                        <div className='text-2xl text-gray-600 font-bold'>{filteredBookings.map((el) => el.firstname)}</div>
                        <div className='text-lg text-green-700'><MdOutlineVerified /></div>
                        <div>{filteredBookings.map((el) => el.services.specialities)}</div>
                        <div className="text-[#007569] text-sm font-bold">{filteredBookings.map((el) => el.services.specialities)}</div>
                        <p className="text-yellow-500 text-xl">★★★★★</p>
                        <div onClick={()=>handleSavedData()}  className='flex gap-2'>
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
                                <p className='px-3'>{filteredBookings.map((el) => el.clinic)}</p>
                            </button>
                            <button className="flex flex-col p-1 py-2 border-[1px] bg-[#F6F6F6] rounded-r-lg border-[#BABABA]">Location
                                <p className='px-3'>{filteredBookings.map((el) => el.location)}</p>
                            </button>
                        </div>
                    </div>
                    <div className='md:w-[25%] mx-auto flex gap-4 flex-col bg-white'>
                        {/* <div className='flex gap-2'><IoIosCalendar className='mt-1 text-gray-700' /> {selectedDoctor.availableDays}</div> */}
                        {/* <div className='flex gap-2'><GrLocation className='mt-1 font-bold text-gray-700' />{selectedDoctor.feedbackCount} Feedbacks</div> */}
                        <div className='flex gap-2 text-[#007569]'><IoClipboardOutline className='mt-1 font-bold text-gray-700' />{
                            filteredBookings.map((el)=>el.Available) ? "Un Available" : " Available"
                        }</div>
                        <div className='flex gap-2'><GrLocation className='mt-1 font-bold text-gray-700' />{filteredBookings.map((el) => el.location)}</div>
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
                                    <h2 className="text-xl pb-10 font-bold">About {filteredBookings.map((el) => el.firstname)}</h2>
                                    <p>{filteredBookings.map((el)=>(
                                        <div>{el.Bio}</div>
                                    ))}</p>
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
                                                                <p>{feedback.feedback}</p>
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
