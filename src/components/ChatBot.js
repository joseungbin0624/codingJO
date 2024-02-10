 
import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './chatBotConfig'; // ChatBot 설정
import MessageParser from './MessageParser'; // 메시지 파싱 로직
import ActionProvider from './ActionProvider'; // 액션 제공 로직

const ChatBot = () => {
  return (
    <div className="chatbot">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatBot;
