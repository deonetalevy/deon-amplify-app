import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const About = () => (
  <Container>
    <Typography variant="h2" component="h1" gutterBottom>
      About Me
    </Typography>
    <Typography variant="body1">
      This is the about page. Here you can find more information about me.
    </Typography>
  </Container>
);

export default About;
