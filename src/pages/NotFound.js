import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const NotFound = () => (
  <Container>
    <Typography variant="h2" component="h1" gutterBottom>
      404 - Not Found
    </Typography>
    <Typography variant="body1">
      The page you are looking for does not exist.
    </Typography>
  </Container>
);

export default NotFound;
