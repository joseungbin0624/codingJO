import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllForums } from '../store/forumSlice';
import ForumPost from '../components/ForumPost';
import '../styles/ForumPage.scss'; // 정확한 경로 확인

const ForumPage = () => {
    const dispatch = useDispatch();
    const forums = useSelector(state => state.forum.forums);

    useEffect(() => {
        dispatch(fetchAllForums()); // 수정됨
    }, [dispatch]);

    return (
        <div className="forum-page">
            <h1>Forums</h1>
            <div className="forum-list">
                {forums.map(forum => (
                    <ForumPost key={forum.id} forum={forum} />
                ))}
            </div>
        </div>
    );
};

export default ForumPage;
