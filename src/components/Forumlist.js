import React from 'react';
import '../styles/ForumList.scss';

const ForumList = ({ forums }) => {
  return (
    <div className="forum-list">
      {forums.map((forum, index) => (
        <div key={index} className="forum-item">
          <h3>{forum.title}</h3>
          <p>{forum.description}</p> {/* 포럼 설명을 렌더링 */}
        </div>
      ))}
    </div>
  );
};

export default ForumList;
