import React from 'react';
import {Card, Tag, Space, Button} from 'antd';

export default function MatchProfile({
  displayName,
  age,
  values,
  university,
  interests,
  profilePicture,
  handleGenerateCaption,
  handleOpenChatBot
}) {
  

  return (
    <div>
       <Card className="m-auto"
          style={{ width: 300 }}
          cover={
            <img
              alt={displayName}
              src={profilePicture}
            />
          }
          title={displayName}
        >
         <p>Age: {age}</p>
          <p>{university}</p>
          <p>Interests:</p>
          {interests.map((interest) => {
            return <Tag color="orange">{interest}</Tag>;
          })}
          <p>Values:</p>
          {values.map((value) => {
            return <Tag color="purple">{value}</Tag>;
          })}
          
        </Card>
        <Space className="m-3" align="center" direction="vertical" size="large">
                <Button onClick={handleOpenChatBot}>
                    Ask ChatBot to Suggest Activities!
                </Button>
                <Button onClick={handleGenerateCaption}>
                    Make your photo captions fun!
                </Button>
                <Button>Chat</Button>
                <Button>Explore Food Vouchers</Button>
            </Space>
    </div>
  )
}
