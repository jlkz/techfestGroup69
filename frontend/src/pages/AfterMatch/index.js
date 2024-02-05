import React, { useState, useEffect } from "react";
import { Card, Button, Space, Tag } from "antd";

export default function AfterMatch(props) {
  const { matchesData, setMatchesData } = useState([]);
  const { openChatBot, setOpenChatBot } = useState(false);
  const { generateCaption, setGenerateCaption } = useState(false);

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="justify-center ">You guys matched!</h2>
        <Card className="m-auto"
          style={{ width: 300 }}
          cover={
            <img
              alt="displayName"
              src="https://via.assets.so/movie.png?id=1&q=95&w=360&h=360&fit=fill"
            />
          }
          title="title"
        >
            
          
        </Card>
        <Space className="m-3" align="center" direction="vertical" size="large">
                <Button>
                    Ask ChatBot to Suggest Activities!
                </Button>
                <Button>
                    Make your photo captions fun!
                </Button>
            </Space>
        </div>
    </>
  );
}
