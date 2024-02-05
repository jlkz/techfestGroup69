import React, { useState, useEffect } from 'react';
import { Card, Avatar } from 'antd';
import '../stylesheets/text-elements.css';
import image from '../black.avif';

const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch data from JSON file
    fetch('http://localhost:8000/users')
      .then(response => response.json())
      .then(data => setProfileData(data[2]))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {profileData ? (
        <Card>
          <Card.Meta
            avatar={<span style={{ margin: '15px'}}>{<Avatar size={200} src={image} />}</span>}
            title={<span style={{ fontFamily: 'Brush Script MT', fontWeight: 'Extra Bold', fontSize: '58px' }}>{profileData.username}</span>}
            description={
              <div>
                <p>UserName: {profileData.username}</p>
                <p>Name: {profileData.displayName}</p>
                <p>Personality Type: {profileData.personalityType}</p>
                <p>Interests: {profileData.interests.join(', ')}</p>
                <p>Values: {profileData.values.join(', ')}</p>
                <p>Age: {profileData.age}</p>
                <p>University: {profileData.university}</p>
                <p>Major: {profileData.major}</p>
                <p>Location: {profileData.location.city}, {profileData.location.state}, {profileData.location.country}</p>
              </div>
            }
          />
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
