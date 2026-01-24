import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import BookFab from '../components/BookFab';
import nailsImage from '../assets/nails.png';
import lashesImage from '../assets/lashes.png';
import eyebrowsImage from '../assets/eyebrows.png';
import makeupImage from '../assets/makeup.png';
import pedicureImage from '../assets/pedicure.JPEG';

const services = [
  {
    title: 'Russian Manicure',
    description: 'Precision cuticle work and flawless nail shaping using advanced techniques.',
    image: nailsImage,
    featured: true,
    benefits: ['Precision cuticle removal', 'Long-lasting results', 'Gentle on nails'],
  },
  {
    title: 'Gel Extensions',
    description: 'Beautiful, durable extensions that look natural and last for weeks.',
    image: nailsImage,
    featured: true,
    benefits: ['Natural look', 'Strong and durable', 'Custom shapes'],
  },
  {
    title: 'Custom Nail Art',
    description: 'Unique designs and artistic expression tailored to your style.',
    image: nailsImage,
    benefits: ['Unique designs', 'Professional quality', 'Endless possibilities'],
  },
  {
    title: 'Classic Manicure',
    description: 'Traditional manicure with a modern touch for timeless elegance.',
    image: nailsImage,
    benefits: ['Classic techniques', 'Moisturizing treatment', 'Perfect polish'],
  },
  {
    title: 'Pedicure',
    description: 'Relaxing foot care treatment for healthy, beautiful feet.',
    image: pedicureImage,
    benefits: ['Exfoliating treatment', 'Callus removal', 'Nail shaping'],
  },
  {
    title: 'Lash Services',
    description: 'Eyelash extensions and lifts for stunning, natural-looking lashes.',
    image: lashesImage,
    benefits: ['Volume & length', 'Low maintenance', 'Natural appearance'],
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Services Section */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              component="h2"
              align="center"
              sx={{ mb: 2, fontWeight: 700 }}
            >
              Our Services
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
            >
              Discover our range of professional beauty services designed to enhance your natural beauty.
            </Typography>
          </motion.div>
          <Grid container spacing={4}>
            {services.slice(0, 6).map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <ServiceCard service={service} index={index} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              size="large"
              href="/services"
              sx={{ px: 4 }}
            >
              View All Services
            </Button>
          </Box>
        </Box>

        {/* Why Choose Us Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" component="h2" sx={{ mb: 4, fontWeight: 700 }}>
              Why Choose Us
            </Typography>
          </motion.div>
          <Grid container spacing={4}>
            {[
              { title: 'Expert Technicians', desc: 'Certified professionals with years of experience' },
              { title: 'Premium Products', desc: 'Only the highest quality products and tools' },
              { title: 'Clean & Safe', desc: 'Strict hygiene protocols and sanitization' },
              { title: 'Modern Techniques', desc: 'Latest trends and innovative methods' },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            color: 'white',
            borderRadius: 3,
            p: 6,
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Ready to Transform Your Look?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto', opacity: 0.95 }}>
              Book your appointment today and experience the no choice difference.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => window.open('https://www.vagaro.com/nochoice', '_blank')}
              sx={{
                backgroundColor: 'white',
                color: 'secondary.main',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Book Now
            </Button>
          </motion.div>
        </Box>
      </Container>
      <BookFab />
    </>
  );
};

export default HomePage;



