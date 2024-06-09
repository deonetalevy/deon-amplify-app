// src/components/Resume.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Resume = () => (
  <Container>
    <Typography variant="h2" component="h1" gutterBottom>
      Resume
    </Typography>
    <Typography variant="h4" component="h2" gutterBottom>
      Education
    </Typography>
    <List>
      <ListItem>
        <ListItemText
          primary="Bachelor of Science in Computer Science"
          secondary="XYZ University, 2020"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Master of Science in Software Engineering"
          secondary="ABC University, 2022"
        />
      </ListItem>
    </List>
    <Typography variant="h4" component="h2" gutterBottom>
      Work Experience
    </Typography>
    <List>
      <ListItem>
        <ListItemText
          primary="Software Engineer"
          secondary="Tech Company, 2023 - Present"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Junior Developer"
          secondary="Another Tech Company, 2021 - 2023"
        />
      </ListItem>
    </List>
    <Typography variant="h4" component="h2" gutterBottom>
      Skills
    </Typography>
    <Typography variant="body1">
      JavaScript, React, Node.js, Python, AWS, SQL, NoSQL, Docker, Kubernetes, Git, Agile methodologies
    </Typography>
  </Container>
);

export default Resume;
