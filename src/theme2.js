// src/theme.js
import { createTheme } from '@mui/material/styles';
import { red, green, blueGrey, amber } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[700], // Darker primary color
    },
    secondary: {
      main: amber[700], // Rich secondary color
    },
    error: {
      main: red.A400, // Custom error color
    },
    success: {
      main: green[500], // Custom success color
    },
    background: {
      default: '#f4f6f8', // Light background color
      paper: '#ffffff', // Paper background color
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
      color: '#34495e',
    },
    button: {
      fontSize: '1rem',
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners for all components
  },
  spacing: 8, // Default spacing unit (can be used for padding, margin, etc.)
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: blueGrey[900], // Custom background color for the AppBar
          color: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px', // Custom border radius for buttons
          padding: '8px 16px', // Custom padding for buttons
        },
        containedPrimary: {
          backgroundColor: blueGrey[700],
          '&:hover': {
            backgroundColor: blueGrey[800],
          },
        },
        containedSecondary: {
          backgroundColor: amber[700],
          '&:hover': {
            backgroundColor: amber[800],
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 3px 6px rgba(0,0,0,0.1)', // Custom box shadow for cards
          borderRadius: '12px', // Custom border radius for cards
          padding: '16px', // Custom padding for cards
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: '16px', // Custom margin for typography
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: blueGrey[700], // Custom color for links
          '&:hover': {
            color: blueGrey[800], // Custom hover color for links
            textDecoration: 'none', // Custom hover effect for links
          },
        },
      },
    },
  },
});

export default theme;
