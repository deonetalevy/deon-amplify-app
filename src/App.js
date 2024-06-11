import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import Resume from './components/Resume';
import NotFound from './pages/NotFound';
import Contact from './components/Contact';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Authenticator
} from "@aws-amplify/ui-react";
import './App.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route exact path="/blog" element={<BlogList/>} />
        <Route path="/blog/:id" element={<BlogPost/>} />
        <Route exact path="/projects" element={<ProjectList/>} />
        <Route path="/project/:id" element={<ProjectDetails/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path ="*" element={<NotFound/>} />
      </Routes>
      <Footer />
      <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to my website, with auth!
          </p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
      </Authenticator>
    </Router>
  </ThemeProvider>
);


export default withAuthenticator(App);
