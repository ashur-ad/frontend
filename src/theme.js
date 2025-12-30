import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#111214', // Charcoal
    },
    secondary: {
      main: '#B76E79', // Rose-gold
    },
    background: {
      default: '#F6F6F6', // Light BG
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111214',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    letterSpacing: '0.02em', // +2% letter-spacing
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0,0,0,0.05)',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 3px 6px rgba(0,0,0,0.08)',
    '0px 4px 8px rgba(0,0,0,0.08)',
    '0px 6px 12px rgba(0,0,0,0.1)',
    '0px 8px 16px rgba(0,0,0,0.1)',
    '0px 10px 20px rgba(0,0,0,0.12)',
    '0px 12px 24px rgba(0,0,0,0.12)',
    '0px 16px 32px rgba(0,0,0,0.15)',
    '0px 20px 40px rgba(0,0,0,0.15)',
    '0px 24px 48px rgba(0,0,0,0.18)',
    ...Array(12).fill('0px 2px 8px rgba(0,0,0,0.1)'),
  ],
  spacing: 8, // 8px spacing scale
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontWeight: 500,
        },
        contained: {
          boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
          '&:hover': {
            boxShadow: '0px 6px 12px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
  },
});

export default theme;

