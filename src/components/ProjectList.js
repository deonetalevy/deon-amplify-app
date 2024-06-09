// src/components/ProjectList.js
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const ProjectList = () => {
  const projects = [
    { id: 1, title: 'Project One', description: 'This is project one.', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Project Two', description: 'This is project two.', image: 'https://via.placeholder.com/150' },
    // Add more projects here
  ];

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map(project => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={project.title}
                height="140"
                image={project.image}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {project.description}
                </Typography>
                <Button component={Link} to={`/project/${project.id}`} size="small" color="primary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectList;
