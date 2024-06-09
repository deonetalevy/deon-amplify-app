// src/components/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const BlogPost = () => {
  const { id } = useParams();
  const blogPosts = {
    1: { title: 'First Blog Post', content: 'This is the full content of my first blog post...', date: '2024-06-09' },
    2: { title: 'Second Blog Post', content: 'This is the full content of my second blog post...', date: '2024-06-10' },
    // Add more blog posts here
  };

  const post = blogPosts[id];

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {post.content}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        {post.date}
      </Typography>
    </Container>
  );
};

export default BlogPost;
