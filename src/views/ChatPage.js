import React, { useState, useEffect } from 'react';
import RealtimeDiscussion from '../components/RealtimeDiscussion';
import { getUserChats } from '../services/chatService';
import '../styles/ChatPage.scss';
import { Link } from 'react-router-dom';

function ChatPage() {
  const [chats, setChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);

  useEffect(() => {
    async function fetchChats() {
      try {
        const data = await getUserChats();
        setChats(data);
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    }
    fetchChats();
  }, []);

  return (
    <div className="chat-page">
      <h1>Your Chats</h1>
      <div className="chat-list">
        {chats.length > 0 ? chats.map(chat => (
          <div key={chat.id} className="chat-summary" onClick={() => setSelectedChatId(chat.id)}>
            {chat.title}
          </div>
        )) : <p>No chats available.</p>}
      </div>
      {selectedChatId && <RealtimeDiscussion chatId={selectedChatId} />}
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default ChatPage;
