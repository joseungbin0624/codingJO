import React from 'react';
import '../styles/Post.scss';

function Post({ post }) {
  // 포스트 날짜 형식을 보다 친숙한 형태로 변환
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="post-footer">
        <span>Posted by {post.author}</span>
        {/* 날짜 형식 변경 반영 */}
        <span>{formattedDate}</span>
      </div>
    </article>
  );
}

export default Post;
