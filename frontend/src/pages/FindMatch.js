import React, { useState, useEffect } from "react";
import { SuggestMatchCard } from "../components/SuggestMatchCard";

export function FindMatch(props) {
  const [users, setUsersData] = useState([]);
  const [currentUser, setCurrentUser] = userState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [continueShowing, setContinueShowing] = useState(true); 

  const handleLike = () => {
    // Handle like action
    const id =  users.filter((user)=>{
        return user.id;
    })
    console.log(`Liked card with id ${users[currentCardIndex].id}`);
    showNextCard();
  };

  const handlePass = () => {
    // Handle pass action
    console.log(`Passed card with id ${users[currentCardIndex].id}`);
    showNextCard();
  };

  const showNextCard = () => {
    // if no more cards to show then show "no more suggested matches in your proximity"
    if ((prevIndex + 1) % users.length) {
        setContinueShowing(false);
    } else {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }

  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("users.json");
        console.log(response);
        const data = await response.json();
        setUserData(data);
        setCurrentUser(users[0]); 

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>
  <SuggestMatchCard currentUser={currentUser}>
    </SuggestMatchCard>
    </div>;
}
