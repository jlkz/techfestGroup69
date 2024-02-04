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
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/AfterMatch" element={<AfterMatch />} />
                <Route path="/ImageCaption" element={<ImageCaption />} />
            </Routes>
        </Router>
    );
}
 
export default App;