import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import AfterMatch from "./pages/AfterMatch";
import ImageCaption from "./pages/ImageCaption";
import FindMatch from "./pages/FindMatch";
import Chatbot from "./components/Chatbot"
import SignInPage from "./components/SignIn";
import SignUpPage from "./components/SignUp"; 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/FindMatch" element={<FindMatch />} />
                <Route path="/AfterMatch" element={<AfterMatch />} />
                <Route path="/ImageCaption" element={<ImageCaption />} />
                <Route path="/ChatBot" element={<Chatbot />}/> 
                <Route path="/SignIn" element={<SignInPage />} />  
                <Route path="/SignUp" element={<SignUpPage />} />       
            </Routes>
        </Router>
    );
}
 
export default App;