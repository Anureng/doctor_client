import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import SignUpPage from './pages/SignUpPage';
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <div className="App ">
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignUpPage/>}/>
    
  
    
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
