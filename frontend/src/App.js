import React from "react";
import './App.css';
<<<<<<< HEAD
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
=======
import { SuggestMatchCard } from './components/SuggestMatchCard';
function App() {
  return (
    <div>
      
    </div>
  );
>>>>>>> ff81335e9 (Add FindMatch and SuggestMatchCard)
}
 
export default App;