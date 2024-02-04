<<<<<<< Updated upstream
import { ProChat } from '@ant-design/pro-chat';
import React from 'react'

export default function Chatbot(props) {
    
    
    return (
        <>
            
        </>
    )
}
=======
import { useState, useEffect } from 'react'
import { ProChat } from '@ant-design/pro-chat';
import { useTheme } from 'antd-style';


export default function Home() {

  const theme = useTheme();
  const [showComponent, setShowComponent] = useState(false)

  useEffect(() => setShowComponent(true), [])

  return (
    <div
      style={{
        backgroundColor: theme.colorBgLayout,
      }}
    >
      {
        showComponent && <ProChat
          style={{
            height: '90vh',
            width: '100vw',
          }}
          request={async (messages) => {
            const api_key = "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";

            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${api_key}`
            };
            const payload = {
                "model": "gpt-3.5-turbo",
                "messages": [
                {"role": "system", 
                "content": "You are a conversational prompt that will receive the details of the person, and generate 5 conversational prompt for two people that meet for the first time"},
                
                    {"role": "user", 
                    "content": "Person 1: Personality Type: INFJ, Values: diligence, perseverance. Interests: cooking, baking, yoga."}
                
                ],
                "max_tokens": 300
            };
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(payload)
                });

            



            return response;
          }}

        />
      }
    </div>
  );
}
  

>>>>>>> Stashed changes
