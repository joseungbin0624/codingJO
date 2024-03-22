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
  }, [chatId]);

  const handleSendMessage = async () => {
    if (!message.trim()) return; // 빈 메시지 전송 방지
    try {
      await sendMessage(chatId, { message });
      setMessage('');
      // 새 메시지를 추가한 채팅 데이터를 다시 가져옵니다.
      fetchChat();
    } catch (error) {
      console.error('Failed to send message', error);
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
        onChange={e => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default RealtimeDiscussion;
