// src/components/Contact.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Contact = () => (
  <Container>
    <Typography variant="h2" component="h1" gutterBottom>
      Contact Me
    </Typography>
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '600px',
        margin: 'auto',
      }}
    >
      <TextField label="Name" variant="outlined" fullWidth required />
      <TextField label="Email" type="email" variant="outlined" fullWidth required />
      <TextField label="Message" variant="outlined" fullWidth required multiline rows={4} />
      <Button variant="contained" color="primary" type="submit">
        Send
      </Button>
    </Box>
  </Container>
);

export default Contact;
