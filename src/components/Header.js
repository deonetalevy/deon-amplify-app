import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Deone'Ta Levy's Website
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/about">About</Button>
      <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
      <Button color="inherit" component={Link} to="/contact">Contact</Button>
      <Button color="inherit" component={Link} to="/blog">Blog</Button>
      <Button color="inherit" component={Link} to="/projects">Projects</Button>
      <Button color="inherit" component={Link} to="/resume">Resume</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
