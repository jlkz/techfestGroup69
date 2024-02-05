import React, { useState, useEffect } from "react";
import { Card, Button, Space, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import MatchProfile from "./MatchProfile";

export default function AfterMatch(props) {

  const  [successfulMatchesData, setSuccessfulMatchesData]  = useState([]);
  const [usersData, setUsersData]  = useState([]);
  const [filteredData, setFilteredData]  = useState([]);
  const  [openChatBot, setOpenChatBot]  = useState(false);
  const  [generateCaption, setGenerateCaption]  = useState(false);
  
  const navigate = useNavigate(); 

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch("matches.json"); 
        const data = await response.json(); 
        const matchesData = data.userMatches; 
        console.log("matchesData", matchesData);
        setSuccessfulMatchesData(matchesData.successfulMatchesWithUser); 
        console.log("successfulMatchesData", matchesData.successfilMatchesWithUser);
        const response2 = await fetch("users.json");
        const data2 = await response2.json(); 
        setUsersData(data2.users); 
        console.log("AFTERMATCH: this is usersData", usersData);

        setFilteredData(usersData.filter(user => successfulMatchesData.includes(user.id)));


        
      } catch (error) {
        console.error("AFTERMATCH: Error fetching data: ", error);
      }
    };
    fetchData(); 
  }, []);


  const handleOpenChatBot = () => {
    setGenerateCaption(false);
    setOpenChatBot(true); 
    console.log("handleOpenChatBot");
    navigate('/ChatBot');
  }

  const handleGenerateCaption = () => {
    setOpenChatBot(false);
    setGenerateCaption(true); 
    console.log("handleGenerateCaption");
    navigate('/ImageCaption');
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="justify-center ">You guys matched!</h2>
        <MatchProfile
          displayName="Fish"
          interests={["Reading", "Traveling", "Photography"]}
          values={["Equality", "Creativity", "Adventure"]}
          university="Nanyang Technological University"
          age={25}
          profilePicture="https://via.assets.so/img.jpg?w=200&h=200&tc=white&bg=#E78895&t=:)"
          handleGenerateCaption={handleGenerateCaption}
          handleOpenChatBot={handleOpenChatBot}
        >
        </MatchProfile>

        <MatchProfile
         displayName="Amanda"
         interests={["Science", "Strategy Games", "Reading"]}
         values={["Knowledge", "Independence", "Efficiency"]}
         university="SIM University"
         age={27}
         profilePicture="https://via.assets.so/img.jpg?w=200&h=200&tc=white&bg=#E78895&t=:)"
         handleGenerateCaption={handleGenerateCaption}
         handleOpenChatBot={handleOpenChatBot}
        >

        </MatchProfile>
        {/* {filteredData && filteredData.map((fd) => {
          return <MatchProfile
            displayName={fd.displayName}
            interests={fd.interests}
            values={fd.values}
            university={fd.university}
            age={19}
            profilePicture={fd.profilePicture}
            handleGenerateCaption={handleGenerateCaption}
            handleOpenChatBot={handleOpenChatBot}
          ></MatchProfile>
        })} */}
      </div>
    </>
  );
}
