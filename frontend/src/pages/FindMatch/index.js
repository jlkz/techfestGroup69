import React, { useState, useEffect } from "react";
import SuggestMatchCard from "../../components/SuggestMatchCard";
import { Card } from "antd";

import MatchedModal from "./MatchedModal";

export default function FindMatch(props) {
  const [users, setUsersData] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [continueShowing, setContinueShowing] = useState(true); 
  const [matchesData, setMatchesData] = useState([]); 
  const [showMatchedModal, setShowMatchedModal] = useState(false); 

  const handleMatch = () => {
    // Handle like action
    const id = currentUser.id; 
    console.log(`Wanted to match with user id ${id}`);
    // If the other user wants to match also, then show Modal of successful match 
    if (matchesData && matchesData.wantToMatchWithUser.includes(id)){
      console.log(`user ${id} wants to match too`); 
      setShowMatchedModal(true); 
    } else {
      showNextCard();
    }
  };

  const handlePass = () => {
    // Handle pass action
    const id = currentUser.id; 
    console.log(`Passed suggested user id ${id}`);
    showNextCard();
  };

  const showNextCard = () => {
    // if no more cards to show then show "no more suggested matches in your proximity"
    if ((currentCardIndex + 1) > users.length) {
        setContinueShowing(false);
    } else {
        setCurrentCardIndex((currentCardIndex) => (currentCardIndex + 1));
        setCurrentUser(users[currentCardIndex]);
    }

  };

  // set users data 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("users.json");
        const data = await response.json();
        setUsersData(data.users);
        setCurrentUser(data.users[0]);
        setCurrentCardIndex(1);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  // set matches data 
  useEffect(()=>{
    const fetchData = async () => {
      try {
          const response = await fetch("matches.json");
          const data = await response.json();
          console.log("matches", data);
          setMatchesData(data.userMatches);
          console.log("this is matchesData", matchesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []);

  if (!currentUser){
    console.log("currentUser not loaded");
    return(<div>Loading Suggested Profiles...</div>)
  }
  return (<div>
    {continueShowing && (<div>
    <SuggestMatchCard username={currentUser.username} title={currentUser.displayName} 
    profilePicture={currentUser.profilePicture}
    currentUserInterests={currentUser.interests}
    currentUserValues={currentUser.values}
    university={currentUser.university}
    age={currentUser.age}
    handleMatch={handleMatch}
    handlePass={handlePass}>
    </SuggestMatchCard>
    </div>) }
    {
      !continueShowing && (<Card><p>No more matches to show</p></Card>)
    }
    {showMatchedModal && <MatchedModal showMatchedModal={showMatchedModal} setShowMatchedModal={setShowMatchedModal}/>}
    </div>
  );
}
