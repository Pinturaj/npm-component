import React from "react";
import './Message.css';

const Message = ({ label }) => {
    return (
      <div className="message-container">
        <p className="message-label">{label}</p>
      </div>
    );
  };

export default Message;