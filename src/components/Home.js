import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home = () => (
  <Container>
    <Typography variant="h2" component="h1" gutterBottom>
      Welcome to My Personal Website
    </Typography>
    <Typography variant="body1">
      This is the home page of my personal website.
    </Typography>
  </Container>
);

export default Home;
