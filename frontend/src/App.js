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
import Chatbot from "./components/Chatbot";
import Profile from "./pages/Profile";
import FoodDiscount from "./pages/FoodDiscount";

 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/AfterMatch" element={<AfterMatch />} />
                <Route path="/FoodDiscount" element={<FoodDiscount />} />
                <Route path="/ImageCaption" element={<ImageCaption />} />
                <Route path="/ChatBot" element={<Chatbot />}/>
                <Route path="/Profile" element={<Profile />}/>
            </Routes>
        </Router>
    );
}
 
export default App;