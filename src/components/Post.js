import React from 'react';
import { Card } from 'react-bootstrap';

const Post = ({ post }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <footer className="blockquote-footer">
          Posted by {post.author}
        </footer>
      </Card.Body>
    </Card>
  );
};

export default Post;
