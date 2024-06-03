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
import Profile from './components/Profile';
import UserProfile from './pages/UserProfile';
import AppointmentPage from './pages/AppointmentPage';

function App() {
  return (
    <div className="App ">
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path='/doctors' element={<DoctorsList/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profile' element={<UserProfile/>}/>
    <Route path='/appointment' element={<AppointmentPage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
