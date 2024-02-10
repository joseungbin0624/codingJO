import React from 'react';
import moment from 'moment';
import './Post.scss';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="post-footer">
        <span>Posted {moment(post.date).fromNow()}</span>
      </div>
    </div>
  );
};

export default Post;

