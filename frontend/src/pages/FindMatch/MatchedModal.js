import React, {useState} from 'react';
import { Modal, Space, Button } from "antd"; 
import { useNavigate } from 'react-router-dom';

import "../../stylesheets/custom-components.css";

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
    <div>
      <Modal
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
      title="You guys matched!"
      open={showMatchedModal}
      onClose={() => setShowMatchedModal(false)}
      onCancel={() => setShowMatchedModal(false)}
      footer={null}
    > 
      <Space direction="vertical" size="medium" align="center">
        <Button className="modal-button m-1" type="button" onClick={handleRouteToAfterMatch}>See All Matches</Button>
        <Button className="modal-button m-1" type="button" onClick={handleContinue}>Continue Finding Matches</Button>
      </Space>
    </Modal>
    </div>
  )
}
