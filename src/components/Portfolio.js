import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Resume from './Resume';

const Portfolio = () => (
  <Container>
    <Typography variant="h2" component="h1" gutterBottom>
      My Portfolio
    </Typography>
    <Typography variant="body1">
      This is the portfolio page. Here you can find my work and projects.
    </Typography>
  </Container>
);

export default Portfolio;
