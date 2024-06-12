// src/components/Footer.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" color="textSecondary" component="p">
          © {new Date().getFullYear()} My Portfolio
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
