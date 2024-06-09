// src/components/ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const ProjectDetails = () => {
  const { id } = useParams();
  const projects = {
    1: { title: 'Project One', description: 'Detailed information about project one.', image: 'https://via.placeholder.com/600' },
    2: { title: 'Project Two', description: 'Detailed information about project two.', image: 'https://via.placeholder.com/600' },
    // Add more projects here
  };

  const project = projects[id];

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        {project.title}
      </Typography>
      <CardMedia
        component="img"
        alt={project.title}
        height="300"
        image={project.image}
        style={{ marginBottom: '16px' }}
      />
      <Typography variant="body1" paragraph>
        {project.description}
      </Typography>
    </Container>
  );
};

export default ProjectDetails;
