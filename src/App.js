import React, {useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import "@aws-amplify/ui-react/styles.css";
import { Button, Container } from '@mui/material';

import './App.css';
import './transitions.css'; 
import AppRouter from './AppRouter';

const App = () => {
  const [transitionClassNames, setTransitionClassNames] = useState('fade');
  const [footerTransitionClassNames, setFooterTransitionClassNames] = useState('footer-fade');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppRouter transitionClassNames={transitionClassNames} footerTransitionClassNames={footerTransitionClassNames} />
      </Router>
    </ThemeProvider>
  );  
};

export default App;
