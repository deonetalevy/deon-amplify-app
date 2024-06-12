import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import './App.css';
import './transitions.css'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AppRouter = ({ transitionClassNames }) => {
  const location = useLocation();
  const [isVisible, setVisible] = useState(false);

  const handlePageEntered = () => {
    setVisible(true);
  };

  const handlePageExit = () => {
    setVisible(false);
  };

  return(
      <>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames={transitionClassNames} timeout={300} onEntered={handlePageEntered} onExit={handlePageExit}>
            <Routes location={location}>
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
          </CSSTransition>
        </TransitionGroup>  
      </>
  );  
};

export default AppRouter;
