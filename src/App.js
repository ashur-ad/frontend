import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Layout from './components/Layout';
import Home from './pages/Home';

const theme = createTheme({
  palette: {
    background: {
      default: '#a2a2a2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
