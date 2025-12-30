import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero-main.jpg';

const Hero = ({ height = '85vh' }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    window.open('https://www.vagaro.com/nochoice', '_blank');
  };

  const handleViewGallery = () => {
    navigate('/gallery');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height,
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="img"
        src={heroImage}
        alt="no choice beauty salon"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '3rem', md: '4.5rem' },
              fontWeight: 800,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            no choice
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            Professional Beauty Services
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={handleBookNow}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              Book Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={handleViewGallery}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderColor: 'white',
                color: 'white',
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              View Gallery
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;

