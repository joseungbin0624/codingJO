// ChatBot.js
import React, { useState } from 'react';
import { sendMessage } from '../services/chatService';
import '../styles/ChatBot.scss';

function ChatBot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    try {
      const response = await sendMessage('chatId', { message }); // Assume 'chatId' is needed, using 'chatId' as an example
      setResponse(response.message); // Assuming sendMessage returns a message response
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Failed to send message.');
    }
    setMessage(''); // Clear the message
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-bot">
      <input
        type="text"
        placeholder="Say something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSendMessage}>Send</button>
      {response && <p>{response}</p>}
    </div>
  );
}

export default ChatBot;
