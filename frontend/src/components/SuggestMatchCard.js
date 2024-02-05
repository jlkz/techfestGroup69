import React, { useState, useEffect } from "react";
import { Card, Button, Tag, Space } from "antd";
import "../stylesheets/alignments.css";
import "../stylesheets/custom-components.css";

export default function SuggestMatchCard({
  username,
  title,
  profilePicture,
  currentUserInterests,
  currentUserValues,
  university,
  age,
  handleMatch,
  handlePass,
}) {
  if (!currentUserInterests) {
    return <div>Loading...</div>;
  } else {

    return (
      <div className="m-auto">
        <Card
          className="m-auto items-center"
          style={{ width: 300}}
          cover={<img alt={username} src={profilePicture} />}
          title={title}
        > 
          <p>Age: {age}</p>
          <p>{university}</p>
          <p>Interests:</p>
          {currentUserInterests.map((interest) => {
            return <Tag color="orange">{interest}</Tag>;
          })}
          <p>Values:</p>
          {currentUserValues.map((value) => {
            return <Tag color="purple">{value}</Tag>;
          })}

          <Space className="mt-2 flex justify-center" size="large">
            <Button onClick={handleMatch} className="green-button">Match</Button>
            <Button onClick={handlePass} className="red-button">Pass</Button>
          </Space>

        </Card>
      </div>
    );
  }
}
