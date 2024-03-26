import React from 'react';

const ForumPost = ({ forum }) => {
  return (
    <div className="forum-post">
      <h3>{forum.title}</h3>
      <p>{forum.content}</p>
      <small>Posted by {forum.author}</small>
    </div>
  );
};

export default ForumPost;
