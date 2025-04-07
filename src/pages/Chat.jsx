import React from 'react';
import './Chat.css';

const Chat = () => {
  return (
    <div className="chat-page">
      <div className="chat-frame-container">
        <iframe
          src="https://www.yeschat.ai/i/gpts-9t557aqwl9M-Vastu-Shastra"
          title="Vastu AI Chat"
          allow="microphone; clipboard-write"
        ></iframe>
      </div>
    </div>
  );
};

export default Chat;
