import React, {useState, useEffect} from 'react';
import { Card, Button, Tag } from 'antd';

const { Meta }  = Card; 

export default function SuggestMatchCard(currentUser) {
     
    return (
        <div>
            <Card
            style={{ width: 300 }}
            cover={
              <img
                alt={currentUser.username}
                src={currentUser.profilePicture}
              />
            }
            title={currentUser.displayName}
            actions={[

            ]}>
            <p>interests</p>
            {/* {{JSON.stringify(currentUser).interests.map((interest =>{
                return <Tag>{interest}</Tag>
            }))}} */}
            </Card>
        </div>
    )
}
