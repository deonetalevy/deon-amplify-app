import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const Header = () => (
  
  <AppBar position="sticky" sx={{ top: 0, zIndex: 1100 }}>
    <Toolbar sx={{ justifyContent: 'center' }}>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Deone'Ta's Sandbox: A Thought Experiment?
      </Typography>
      <Box sx={{ flexGrow: 0 }}>
        <Box sx={{ justifyContent: 'center', display: 'flex', }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
          <Button color="inherit" component={Link} to="/resume">Resume</Button>
        </Box>
      </Box>  
      <Box sx={{ flexGrow: 1.70 }} />
    </Toolbar>
  </AppBar>
);

export default Header;
