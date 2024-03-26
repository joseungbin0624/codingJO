import React, { useState, useEffect } from 'react';
import { getChatById, sendMessage } from '../services/chatService';
import '../styles/RealtimeDiscussion.scss';

function RealtimeDiscussion({ chatId }) {
  const [chat, setChat] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const chatData = await getChatById(chatId);
        setChat(chatData);
      } catch (error) {
        console.error('Failed to fetch chat', error);
      }
    };
    fetchChat();
  }, [chatId, message]); // Added message to dependencies to refresh chat on new message

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    try {
      await sendMessage(chatId, { message });
      setMessage('');
    } catch (error) {
      console.error('Failed to send message', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="realtime-discussion">
      <div className="messages">
        {chat && chat.messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default RealtimeDiscussion;
