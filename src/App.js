import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import SignUpPage from './pages/SignUpPage';
import LoginPage from "./pages/LoginPage"
import DoctorsList from "./pages/DoctorsList"
import About from './pages/About';
import UserProfile from './pages/UserProfile';
import Payment from './pages/Payment';
import AppointmentPage from './pages/AppointmentPage';
import PaymentSuccessFullPage from './pages/PaymentSuccessFullPage';
import DoctorProfile from './pages/DoctorProfile';
import { SavedDoctorsProvider } from './SavedDoctorsContext';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <SavedDoctorsProvider>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path='/doctors' element={<DoctorsList/>}/>
            <Route path='/doctors/profile/:id' element={<DoctorProfile/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/profile' element={<UserProfile/>}/>
            <Route path='/appointment/:id' element={<AppointmentPage/>}/>
            <Route path='/paymentSuccessFull/:id' element={<PaymentSuccessFullPage/>}/>
            <Route path='/payment/:id' element={<Payment/>}/>
          </Routes>
        </SavedDoctorsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
