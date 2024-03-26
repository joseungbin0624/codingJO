import React from 'react';

const ChatList = ({ chats }) => {
  return (
    <div className="chat-list">
      {chats.map((chat, index) => (
        <div key={index} className="chat-item">
          <h3>{chat.user}</h3>
          <p>{chat.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
