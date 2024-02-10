import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './RealtimeDiscussion.scss';

const socket = io('http://localhost:5000'); // 서버 주소

const RealtimeDiscussion = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('newMessage', (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket.off('newMessage');
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message);
      setMessage('');
    }
  };

  return (
    <div className="realtime-discussion">
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default RealtimeDiscussion;

