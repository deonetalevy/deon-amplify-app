// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3498db', // A unique primary color
    },
    secondary: {
      main: '#2ecc71', // A unique secondary color
    },
    background: {
      default: '#f4f6f8', // Background color for the entire app
    },
    text: {
      primary: '#2c3e50', // Primary text color
      secondary: '#34495e', // Secondary text color
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#2c3e50',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#2c3e50',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#2c3e50',
    },
    body1: {
      fontSize: '1rem',
      color: '#2c3e50',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#2c3e50',
    },
    button: {
      fontSize: '1rem',
      textTransform: 'none',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#3498db', // Custom background color for the AppBar
          color: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px', // Custom border radius for buttons
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 3px 6px rgba(0,0,0,0.1)', // Custom box shadow for cards
        },
      },
    },
  },
});

export default theme;
