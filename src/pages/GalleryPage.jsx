import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import InstagramGallery from '../components/InstagramGallery';

const GalleryPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{ mb: 2, fontWeight: 700 }}
        >
          Gallery
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
        >
          Follow us on Instagram @nochoicenails for the latest updates and inspiration.
        </Typography>
      </motion.div>
      <InstagramGallery />
    </Container>
  );
};

export default GalleryPage;

