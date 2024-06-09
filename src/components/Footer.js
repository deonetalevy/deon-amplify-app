import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => (
  <Container component="footer" style={{ marginTop: 'auto', padding: '1rem 0', textAlign: 'center' }}>
    <Typography variant="body2" color="textSecondary">
      &copy; {new Date().getFullYear()} My Personal Website. All rights reserved.
    </Typography>
  </Container>
);

export default Footer;
