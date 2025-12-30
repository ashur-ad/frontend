import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: '#d3d2d2',
        py: 3,
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              fontFamily: '"Crimson Text", serif',
              fontSize: { xs: '0.875rem', md: '0.9375rem' },
              color: '#d3d2d2',
            }}
          >
            © 2025 no choice. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

