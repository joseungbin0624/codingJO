import React, { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import forumService from '../services/forumService';

const ForumPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await forumService.getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <Container>
      <h1>Forum</h1>
      <ListGroup>
        {posts.map(post => (
          <ListGroup.Item key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <footer className="blockquote-footer">Posted by {post.author}</footer>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ForumPage;
