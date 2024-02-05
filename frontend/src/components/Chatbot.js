import { useState, useEffect } from 'react'
import { ProChat } from '@ant-design/pro-chat';
import { useTheme } from 'antd-style';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';


export default function Home() {

  const theme = useTheme();
  const [showComponent, setShowComponent] = useState(false)
  const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true
  });

  useEffect(() => setShowComponent(true), [])
  
  const user = {
    "id": 2,
    "username": "nicole123",
    "displayName": "Nicole",
    "personalityType": "ISTJ",
    "interests": ["Hiking", "Cooking", "Technology"],
    "values": ["Order", "Reliability", "Efficiency"],
    "age": 28,
    "university": "Nanyang Technological University",
    "major": "Business Administration",
    "location": {
      "city": "City2",
      "state": "State2",
      "country": "Country2"
    }
  };

  const user2 = {
    "id": 1,
    "username": "fish123",
    "displayName": "Fish",
    "personalityType": "ENFP",
    "interests": ["Reading", "Traveling", "Photography"],
    "values": ["Equality", "Creativity", "Adventure"],
    "profilePicture": "https://placehold.co/400",
    "age": 25,
    "university": "Nanyang Technological University",
    "major": "Computer Science",
    "location": {
      "city": "City1",
      "state": "State1",
      "country": "Country1"
    }
  };

  return (
    <div
      style={{
        backgroundColor: theme.colorBgLayout,
      }}
    >
      {
        showComponent && <ProChat
          helloMessage={
            'Welcome to MingleConnect AI Chatbot! Please type "1" to start a conversation or "2" to get activity suggestions.'
          }
          style={{
            height: '90vh',
            width: '100vw',
          }}
          request={async (messages) => {
            const choice = messages[messages.length - 1].content;
            console.log(messages);
            console.log(typeof(choice));

            if(choice.includes("1")){
              const agent = {
                role: "system",
                content: "You are a conversation starter AI agent, where you will first list out the characteristics, then provide 5 conversation prompts based on the personality and interests given."
              };

              const personality = {
                role: "user",
                content: `Personality Type: ${user.personalityType}. Values: ${user.values.join(', ')}. Interests: ${user.interests.join(', ')}.`
              }

              const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [agent, personality],
                stream: true,
                "max_tokens": 300
              });

              const stream = OpenAIStream(response);
              return new StreamingTextResponse(stream);

            }else{
              const agent = {
                role: "system",
                content: "You are an activity suggestion AI, where you will be provided the personality type and interests of two individuals, then you will need to offer 5 activities that can help break the ice and create a positive interaction between individuals."
              }

              const personality = {
                role: "user",
                content: `1. Personality Type: ${user.personalityType}. Values: ${user.values.join(', ')}. Interests: ${user.interests.join(', ')}.\n 2. Personality Type: ${user2.personalityType}. Values: ${user2.values.join(', ')}. Interests: ${user2.interests.join(', ')}.`
              };

              const response = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [agent, personality],
                stream: true,
                "max_tokens": 300
              });

              const stream = OpenAIStream(response);
              return new StreamingTextResponse(stream);
            }
            
            

            
          }}

        />
      }
    </div>
  );
}
  

