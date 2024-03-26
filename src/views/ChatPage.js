import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserChats } from '../store/chatSlice';
import ChatList from '../components/ChatList';
// ChatPage.js 올바른 스타일 시트 경로
import '../styles/ChatPage.scss';


const ChatPage = () => {
    const dispatch = useDispatch();
    const { chats } = useSelector(state => state.chat);
    const [currentUserId, setCurrentUserId] = useState(null); // 가정: 현재 사용자 ID를 상태로 관리

    useEffect(() => {
        if (currentUserId) {
            dispatch(fetchUserChats(currentUserId));
        }
    }, [currentUserId, dispatch]);

    return (
        <div className="chat-page">
            <h1>Chats</h1>
            <ChatList chats={chats} />
        </div>
    );
};

export default ChatPage;
