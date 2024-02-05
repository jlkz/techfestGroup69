import React, {useState} from 'react';
import { Modal, Space, Button } from "antd"; 
import { useNavigate } from 'react-router-dom';

export default function MatchedModal(
  {
  showMatchedModal,
  setShowMatchedModal
  }
) {
  const navigate = useNavigate(); 

  const handleRouteToAfterMatch = () => {
    setShowMatchedModal(false); 
    navigate("/AfterMatch");

  }

  const handleContinue = () => {
    setShowMatchedModal(false); // close the modal
  }


  return (
    <>
      <Modal
      title="You guys matched!"
      open={showMatchedModal}
      onClose={() => setShowMatchedModal(false)}
      onCancel={() => setShowMatchedModal(false)}
      footer={null}
    >
      <Space direction="vertical" size="medium" align="center">
        <Button type="button" onClick={handleRouteToAfterMatch}>See All Matches</Button>
        <Button type="button" onClick={handleContinue}>Continue Finding Matches</Button>
      </Space>
    </Modal>
    </>
  )
}
