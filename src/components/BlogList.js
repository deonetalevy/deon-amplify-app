// src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const BlogList = () => {
  const blogPosts = [
    { id: 1, title: 'First Blog Post', excerpt: 'This is my first blog post...', date: '2024-06-09' },
    { id: 2, title: 'Second Blog Post', excerpt: 'This is my second blog post...', date: '2024-06-10' },
    // Add more blog posts here
  ];

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Blog
      </Typography>
      <List>
        {blogPosts.map(post => (
          <ListItem key={post.id} component={Link} to={`/blog/${post.id}`} button>
            <ListItemText
              primary={post.title}
              secondary={`${post.excerpt} (${post.date})`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default BlogList;
