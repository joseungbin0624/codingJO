import React, { useState } from 'react';
import { sendMessage } from '../services/chatService';
import '../styles/ChatBot.scss';

function ChatBot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    try {
      const response = await sendMessage('chatId', { message }); // chatId 필요, 예시로 'chatId' 사용
      setResponse(response.message); // 가정: sendMessage가 메시지 응답을 반환한다고 가정
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Failed to send message.');
    }
    setMessage(''); // 메시지 초기화
  };

  return (
    <div className="chat-bot">
      <input
        type="text"
        placeholder="Say something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
      {response && <p>{response}</p>} {/* 서버 응답 출력 추가 */}
    </div>
  );
}

export default ChatBot;
