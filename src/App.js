import React, {useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import "@aws-amplify/ui-react/styles.css";
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import './Layout.css';
import './App.css';
import './transitions.css'; 
import AppRouter from './AppRouter';
import AuthenticatorComponent from './components/Authenticator';
import { withAuthenticator } from "@aws-amplify/ui-react";

const App = () => {
  const [transitionClassNames, setTransitionClassNames] = useState('fade');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Container className="container-with-header" sx={{ display: 'flex', flexDirection: 'row', minHeight: '100vh', }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '20%', borderRight: '1px solid #444', padding: 2, }}>
              {/* Left Column Content */}
              <Box sx={{ flex: 1 }}>
                {/* Add any other content here */}
              </Box>
              <Footer className="sticky-footer" /> 
          </Box>
          <Box sx={{ width: '60%', padding: 2, }}>
              {/* Middle Column (Main Content) */}
              <AppRouter transitionClassNames={transitionClassNames} />
          </Box>
          <Box sx={{ width: '20%', borderLeft: '1px solid #444', padding: 2 }}>
              {/* Right Column Content */}
            <Box>
                <AuthenticatorComponent /> {/* Add the authenticator component here */}
            </Box>
          </Box>
        </Container>
      </Router>
    </ThemeProvider>
  );  
};

export default withAuthenticator(App);
