// src/components/About.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const About = () => (
  <Container>
    <Typography variant="h2" component="h1" gutterBottom>
      About Me
    </Typography>
    
    <Typography variant="h4" component="h2" gutterBottom>
      Introduction
    </Typography>
    <Typography variant="body1" paragraph>
      Hello! I'm [Your Name], a passionate software engineer with a knack for developing innovative web applications. I love transforming ideas into reality using code.
    </Typography>
    
    <Divider />
    
    <Typography variant="h4" component="h2" gutterBottom>
      Professional Background
    </Typography>
    <Typography variant="body1" paragraph>
      Over the past [number] years, I have worked with several companies and clients, delivering high-quality software solutions. My expertise lies in frontend development, particularly with React.js, but I also have experience in backend technologies.
    </Typography>
    
    <Divider />
    
    <Typography variant="h4" component="h2" gutterBottom>
      Skills and Expertise
    </Typography>
    <Typography variant="body1" paragraph>
      My skill set includes:
      <ul>
        <li>Frontend: React.js, Material-UI, Redux</li>
        <li>Backend: Node.js, Express, MongoDB</li>
        <li>DevOps: AWS, Docker, Jenkins</li>
        <li>Other: Git, Agile methodologies, Test-Driven Development (TDD)</li>
      </ul>
    </Typography>
    
    <Divider />
    
    <Typography variant="h4" component="h2" gutterBottom>
      Projects and Achievements
    </Typography>
    <Typography variant="body1" paragraph>
      Some of my notable projects include:
      <ul>
        <li><strong>Project One:</strong> Description of project one.</li>
        <li><strong>Project Two:</strong> Description of project two.</li>
        <li><strong>Project Three:</strong> Description of project three.</li>
      </ul>
      Additionally, I have received [any awards or recognitions].
    </Typography>
    
    <Divider />
    
    <Typography variant="h4" component="h2" gutterBottom>
      Education
    </Typography>
    <Typography variant="body1" paragraph>
      I hold a [Degree] in [Field] from [University]. During my time there, I [mention any notable achievements, projects, or activities].
    </Typography>
    
    <Divider />
    
    <Typography variant="h4" component="h2" gutterBottom>
      Personal Interests
    </Typography>
    <Typography variant="body1" paragraph>
      When I'm not coding, I enjoy [hobbies/interests]. I also love [any other personal interests, e.g., travel, reading, playing sports].
    </Typography>
    
    <Divider />
    
    <Typography variant="h4" component="h2" gutterBottom>
      Testimonials
    </Typography>
    <Typography variant="body1" paragraph>
      Here's what some of my colleagues and clients have to say about me:
      <ul>
        <li>"[Testimonial 1]" - [Person 1]</li>
        <li>"[Testimonial 2]" - [Person 2]</li>
        <li>"[Testimonial 3]" - [Person 3]</li>
      </ul>
    </Typography>
    
    <Divider />
    
    <Typography variant="h4" component="h2" gutterBottom>
      Contact Information
    </Typography>
    <Typography variant="body1" paragraph>
      Feel free to reach out to me at [your email address] or connect with me on [LinkedIn/Twitter/other social media].
    </Typography>
  </Container>
);

export default About;
