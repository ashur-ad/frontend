/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import galleryImage from '../assets/gallery.png';
import servicesImage from '../assets/services.png';
import nailsImage from '../assets/nails.png';
import makeupImage from '../assets/makeup.png';
import lashesImage from '../assets/lashes.png';
import eyebrowsImage from '../assets/eyebrows.png';
import iglogo from '../assets/iglogo.png';

// Design system constants
const ACCENT_COLOR = '#9A9A8A'; // Warm greige/stone

// Service Data
const serviceCategories = [
  {
    category: 'Nails',
    services: [
      { name: 'Gel removal + shape (no manicure)', price: '$20.00' },
      { name: 'Gel removal (no manicure)', price: '$15.00' },
      { name: 'Russian pedicure gel', price: '$80.00' },
      { name: 'Russian pedicure (regular polish)', price: '$70.00' },
      { name: 'Russian Pedicure (no gel or polish)', price: '$60.00' },
      { 
        name: 'Hard gel extensions', 
        price: '$140.00',
        description: 'Hard gel extensions - is an extension with hard gel that offer a durable, stylish enhancement to natural nails, ensuring a long-lasting and chip-resistant finish.'
      },
      { 
        name: 'Gel X extensions', 
        price: '$110.00',
        description: 'Experience long-lasting Gel X tips paired with a Russian manicure for flawless, beautiful nails.'
      },
      { 
        name: 'Russian manicure + gel', 
        price: '$80.00',
        note: 'if needed hard gel or builder gel or powder it is $10 additional'
      },
      { name: 'Russian manicure + regular polish', price: '$65.00' },
      { 
        name: 'Russian manicure (no polish or gel)', 
        price: '$50.00',
        note: 'Removal of previous gel/polish is included in price'
      },
      { name: "Men's pedicure (no polish/no gel)", price: '$70.00' },
      { name: "Men's pedicure (regular polish)", price: '$80.00' },
      { name: "Men's pedicure (gel)", price: '$90.00' },
      { name: "Men's manicure (no polish/no gel)", price: '$60.00' },
      { name: "Men's manicure (regular polish)", price: '$75.00' },
      { name: "Men's manicure (gel)", price: '$90.00' },
    ]
  },
  {
    category: 'Makeup',
    services: [
      { 
        name: 'Makeup', 
        price: '$150.00',
        description: 'any type of makeup : daily, evening, makeup for photoshoot'
      },
      { 
        name: 'Wedding makeup', 
        price: '$300.00',
        description: 'Special makeup for weddings'
      },
      { name: 'Wedding makeup trial', price: '$200.00' },
      { 
        name: 'wedding makeup include trial', 
        price: '$450.00',
        note: 'wedding makeup plus trial'
      },
    ]
  },
  {
    category: 'Eyelashes',
    services: [
      { 
        name: 'New Classic set Eyelash Extension', 
        price: '$140.00',
        description: 'Classic means that there is a single 1:1 extension applied to each natural lash. The most natural effect'
      },
      { 
        name: 'Classic Volume Extension Fill', 
        price: '$100.00',
        note: 'Classic volume refill is available if you are coming no longer than 14 days after last appointment with us.'
      },
      { 
        name: 'New 2D Set Eyelash Extension', 
        price: '$160.00',
        description: '2D means that 2 lashes applied to one natural lash'
      },
      { 
        name: '2D Eyelash Extension Fill', 
        price: '$120.00',
        note: 'Refill is available if you are coming no longer than 21 days from previous set with us.'
      },
      { 
        name: 'New 3D Set Eyelash Extension', 
        price: '$170.00',
        description: '3D volume means that 3 lashes applied to one natural lash.'
      },
      { 
        name: '3D Eyelash Extension Fill', 
        price: '$130.00',
        note: 'Refill is available if you are coming no longer than 21 days from previous set with us.'
      },
      { 
        name: 'New 4-5D Set Eyelash Extension', 
        price: '$180.00',
        description: '4-5D means that 4-5 lashes applied to one natural lash'
      },
      { 
        name: '4-5D Eyelash Extension Fill', 
        price: '$130.00',
        note: 'Refill is available if you are coming no longer than 21 days from previous set with us.'
      },
      { 
        name: 'New MEGA VOLUME Set Eyelash Extension', 
        price: '$190.00',
        description: 'MEGA VOLUME means that 6 or more lashes applied to one natural lash.'
      },
      { 
        name: 'MEGA VOLUME Eyelash Extension Fill', 
        price: '$140.00',
        note: 'Refill is available if you are coming no longer than 21 days from previous set with us.'
      },
      { 
        name: 'Eyelash tinting', 
        price: '$20.00',
        description: 'Process to dye eyelash to dark colors.'
      },
      { 
        name: 'Eyelash Removal (not our work) - with future extension', 
        price: '$20.00',
        description: 'Removing eyelash from different place with future extension only.'
      },
      { 
        name: 'Eyelash Removal (not our work) - no future extension', 
        price: '$40.00',
        description: 'Removing eyelash from different place with no future extension.'
      },
      { 
        name: 'Eyelash Lamination (Lift)', 
        price: '$110.00',
        description: 'Eyelash Lamination (Lift) is s lash enhancement option that gives semi-permanent result. It is a chemical treatment that lifts and curl your natural lashes.',
        note: 'Lasts around 6 weeks. Recommended to clients who has own long but straight lashes.'
      },
      { 
        name: 'Express Lashes', 
        price: '',
        description: 'Express Lashes offers a unique application technique where fans of fake lashes are placed on the lower layer of your natural lashes, resulting in 50%-70% extension coverage. This service provides a similar fullness to a full set but has a shorter lifespan and is completed in approximately one hour, with limitations on complex shapes and extra short lashes.'
      },
    ]
  },
  {
    category: 'Eyebrows',
    services: [
      {
        name: 'brow shaping',
        price: '$35.00',
        description: 'brow shaping : wax, tweezers and threading.',
      },
      {
        name: 'brow tinting',
        price: '$35.00',
        description: 'brow tinting: brow henna or dyeing.',
        note: 'Lasts 3-6 weeks',
      },
      {
        name: 'brow tinting + shaping',
        price: '$60.00',
        description: 'Brows shaping involves waxing, tweezing along your brows natural lines to ensure a perfect contour. With eyebrow tinting a safe semi- permanent tint is applied to shape, define and enhance your eyebrows',
        note: 'lasts 4-6 weeks',
      },
      {
        name: 'brow lamination ( include tinting and shaping)',
        price: '$100.00',
        description: 'Brow lamination (lift) is a procedure that lifts and smooth brows with the goal of creating sleeker, neater and fuller -looking eyebrows. Result is similar to the look of applying brow gel.',
        note: 'Service include shaping and tinting. Lasts 4-6 weeks',
      },
      {
        name: 'Brow lamination ( include shaping)',
        price: '$80.00',
        description: 'brow lamination (lift) is a procedure lifts and smooths brows with the goal of creating sleeker, neater and fuller looking eyebrows. Result is similar to the look of applying brow gel.',
        note: 'Service include shaping. Lasts 4-6 weeks',
      },
    ]
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Nails');
  
  const selectedCategoryData = serviceCategories.find(cat => cat.category === selectedCategory);

  return (
    <>
      {/* Section 01 - Home */}
      <Box
        component="section"
        id="home"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          width: '100%',
        }}
      >
        {/* Section Marker */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 2, md: 4 },
            top: { xs: 2, md: 3 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 1,
            zIndex: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Crimson Text", serif',
              fontSize: '0.625rem',
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: ACCENT_COLOR,
            }}
          >
            01
          </Typography>
          <Box
            sx={{
              width: '1px',
              height: '60px',
              backgroundColor: ACCENT_COLOR,
            }}
          />
        </Box>

        {/* Gallery Image - First thing visitors see */}
        <Container
          sx={{
            px: { xs: 2, md: 4 },
            mb: { xs: 2.5, md: 3 },
            mt: { xs: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
        <Box
          component="img"
              src={galleryImage}
              alt="Gallery"
          sx={{
                width: '100%',
                maxWidth: '100%',
            height: 'auto',
            display: 'block',
              }}
            />
            
            {/* Booking Buttons */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 3, md: 5 },
                width: '100%',
                maxWidth: { xs: '100%', sm: '700px', md: '800px' },
                mt: { xs: 5, md: 6 },
                mb: { xs: 5, md: 6 },
                justifyContent: { xs: 'center', sm: 'space-between' },
                alignItems: { xs: 'center', sm: 'flex-start' },
              }}
            >
              {/* Huntington Beach Button */}
              <Box
                component="a"
                href="https://www.vagaro.com/nochoicehuntingtonbeach"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  flex: { xs: 'none', sm: 1 },
                  width: { xs: '100%', sm: 'auto' },
                  maxWidth: { xs: '100%', sm: 'none' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  px: { xs: 3, md: 5 },
                  py: { xs: 3, md: 4 },
                  height: { xs: '100px', md: '120px' },
                  minHeight: { xs: '100px', md: '120px' },
                  border: '2px solid #1a1a1a',
                  background: 'linear-gradient(to bottom, #e0dfdf 0%, #d3d2d2 50%, #c8c7c7 100%)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: '2px',
                    border: '1px solid rgba(26, 26, 26, 0.2)',
                    pointerEvents: 'none',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-4px',
                    left: '2px',
                    right: '2px',
                    height: '4px',
                    background: 'rgba(0, 0, 0, 0.1)',
                    borderRadius: '0 0 2px 2px',
                    filter: 'blur(4px)',
                    pointerEvents: 'none',
                  },
                  '&:hover': {
                    background: 'linear-gradient(to bottom, #d4d3d3 0%, #c0bfbf 50%, #b5b4b4 100%)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25), 0 3px 6px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                    border: '2px solid #0a0a0a',
                    '&::before': {
                      border: '1px solid rgba(26, 26, 26, 0.35)',
                    },
                    '&::after': {
                      bottom: '-6px',
                      height: '6px',
                      background: 'rgba(0, 0, 0, 0.15)',
                      filter: 'blur(6px)',
                    },
                  },
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, position: 'relative', zIndex: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Crimson Text", serif',
                      fontSize: { xs: '0.9375rem', md: '1.25rem' },
                      fontWeight: 600,
                      color: '#1a1a1a',
                      textAlign: 'center',
                      letterSpacing: { xs: '0.15em', md: '0.25em' },
                      transition: 'color 0.3s ease',
                      textTransform: 'uppercase',
                      mb: { xs: 0.5, md: 0.875 },
                    }}
                  >
                    Book Appointment
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Caveat", cursive',
                      fontSize: { xs: '1.5rem', md: '2.125rem' },
                      fontWeight: 700,
                      color: '#2a2a2a',
                      textAlign: 'center',
                      letterSpacing: '0.01em',
                      transition: 'color 0.3s ease',
                      lineHeight: 1.1,
                    }}
                  >
                    Huntington Beach
                  </Typography>
                </Box>
              </Box>

              {/* Los Angeles Button */}
              <Box
                component="a"
                href="https://www.vagaro.com/nochoice"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  flex: { xs: 'none', sm: 1 },
                  width: { xs: '100%', sm: 'auto' },
                  maxWidth: { xs: '100%', sm: 'none' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  px: { xs: 3, md: 5 },
                  py: { xs: 3, md: 4 },
                  height: { xs: '100px', md: '120px' },
                  minHeight: { xs: '100px', md: '120px' },
                  border: '2px solid #1a1a1a',
                  background: 'linear-gradient(to bottom, #e0dfdf 0%, #d3d2d2 50%, #c8c7c7 100%)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  borderRadius: 0,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: '2px',
                    border: '1px solid rgba(26, 26, 26, 0.2)',
                    pointerEvents: 'none',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-4px',
                    left: '2px',
                    right: '2px',
                    height: '4px',
                    background: 'rgba(0, 0, 0, 0.1)',
                    borderRadius: '0 0 2px 2px',
                    filter: 'blur(4px)',
                    pointerEvents: 'none',
                  },
                  '&:hover': {
                    background: 'linear-gradient(to bottom, #d4d3d3 0%, #c0bfbf 50%, #b5b4b4 100%)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25), 0 3px 6px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                    border: '2px solid #0a0a0a',
                    '&::before': {
                      border: '1px solid rgba(26, 26, 26, 0.35)',
                    },
                    '&::after': {
                      bottom: '-6px',
                      height: '6px',
                      background: 'rgba(0, 0, 0, 0.15)',
                      filter: 'blur(6px)',
                    },
                  },
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, position: 'relative', zIndex: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: '"Crimson Text", serif',
                      fontSize: { xs: '0.9375rem', md: '1.25rem' },
                      fontWeight: 600,
                      color: '#1a1a1a',
                      textAlign: 'center',
                      letterSpacing: { xs: '0.15em', md: '0.25em' },
                      transition: 'color 0.3s ease',
                      textTransform: 'uppercase',
                      mb: { xs: 0.5, md: 0.875 },
                    }}
                  >
                    Book Appointment
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Caveat", cursive',
                      fontSize: { xs: '1.5rem', md: '2.125rem' },
                      fontWeight: 700,
                      color: '#2a2a2a',
                      textAlign: 'center',
                      letterSpacing: '0.01em',
                      transition: 'color 0.3s ease',
                      lineHeight: 1.1,
                    }}
                  >
                    Los Angeles
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Editorial Rule - Left-aligned */}
      <Box
        sx={{
          px: { xs: 2, md: 4 },
          mb: { xs: 1, md: 1.5 },
        }}
      >
        <Box sx={{ width: { xs: '80px', md: '120px' }, height: '1px', bgcolor: ACCENT_COLOR }} />
      </Box>

      {/* Editorial Rule - Left-aligned */}
      <Box
        sx={{
          px: { xs: 2, md: 4 },
          mb: { xs: 1.5, md: 2 },
        }}
      >
        <Box sx={{ width: { xs: '120px', md: '160px' }, height: '1px', bgcolor: ACCENT_COLOR }} />
      </Box>

      {/* Section 04 - Services */} 
      <Box component="section" id="services" sx={{ pt: { xs: 1.5, md: 2 }, pb: { xs: 3, md: 4 } }}>
        <Box sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Section Header */}
          <Box 
            sx={{ 
              position: 'relative', 
              mb: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Section Marker with Vertical Rule */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 2, md: 4 },
                top: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Crimson Text", serif',
                  fontSize: '0.625rem',
                  fontWeight: 300,
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  color: ACCENT_COLOR,
                }}
              >
                04
              </Typography>
              <Box
                sx={{
                  width: '1px',
                  height: '60px',
                  backgroundColor: ACCENT_COLOR,
                }}
              />
            </Box>

            {/* Editorial Rule - Left-aligned */}
            <Box
              sx={{
                width: { xs: '100px', md: '140px' },
                height: '1px',
                backgroundColor: ACCENT_COLOR,
                mb: { xs: 2, md: 2.5 },
                alignSelf: 'flex-start',
                ml: { xs: 6, md: 8 },
              }}
            />

            {/* Main heading */}
            <Typography
              variant="h1"
              sx={{
                textAlign: 'left',
                fontWeight: 900,
                textTransform: 'none',
                letterSpacing: '0.01em',
                color: '#1a1a1a',
                fontFamily: '"Caveat", cursive',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
                lineHeight: 1.2,
                mb: { xs: 2, md: 2.5 },
                position: 'relative',
                zIndex: 1,
                alignSelf: 'flex-start',
                ml: { xs: 6, md: 8 },
              }}
            >
              Services
            </Typography>
          </Box>

          {/* Services Image - Visual Lookbook */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              mt: { xs: 3, md: 4 },
            }}
          >
            <Box
              component="img"
              src={servicesImage}
              alt="Services: Nails, Makeup, Eyelashes, Eyebrows"
              sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '900px', md: '1000px', lg: '1200px' },
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>

          {/* Category Selector */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 4, md: 5 },
              mb: { xs: 3, md: 4 },
            }}
          >
            {/* Desktop: Tabs */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1,
                borderBottom: '1px solid #e0e0e0',
                width: '100%',
                maxWidth: '900px',
              }}
            >
              {serviceCategories.map((categoryData) => (
                <Box
                  key={categoryData.category}
                  onClick={() => setSelectedCategory(categoryData.category)}
                  sx={{
                    px: 3,
                    py: 1.5,
                    cursor: 'pointer',
                    borderBottom: selectedCategory === categoryData.category ? '2px solid #1a1a1a' : '2px solid transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 0.7,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Crimson Text", serif',
                      fontSize: '1rem',
                      fontWeight: selectedCategory === categoryData.category ? 600 : 400,
                      color: '#1a1a1a',
                      textTransform: 'none',
                    }}
                  >
                    {categoryData.category}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Mobile: Horizontal Scrollable Tabs */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                gap: 1,
                width: '100%',
                overflowX: 'auto',
                pb: 1,
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {serviceCategories.map((categoryData) => (
                <Box
                  key={categoryData.category}
                  onClick={() => setSelectedCategory(categoryData.category)}
                  sx={{
                    px: 2.5,
                    py: 1,
                    cursor: 'pointer',
                    borderRadius: '4px',
                    backgroundColor: selectedCategory === categoryData.category ? '#d3d2d2' : 'transparent',
                    border: selectedCategory === categoryData.category ? '1px solid #1a1a1a' : '1px solid #e0e0e0',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    '&:hover': {
                      backgroundColor: selectedCategory === categoryData.category ? '#d3d2d2' : '#f5f5f5',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Crimson Text", serif',
                      fontSize: '0.9375rem',
                      fontWeight: selectedCategory === categoryData.category ? 600 : 400,
                      color: '#1a1a1a',
                      textTransform: 'none',
                    }}
                  >
                    {categoryData.category}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Selected Category Services */}
          {selectedCategoryData && (
            <Box
              sx={{
                maxWidth: '900px',
                mx: 'auto',
                mt: { xs: 2, md: 3 },
                border: '2px dotted #1a1a1a',
                borderRadius: 0,
                p: { xs: 2, md: 3 },
              }}
            >
              {selectedCategoryData.services.map((service, index) => (
                <Box
                  key={index}
                  sx={{
                    borderBottom: index < selectedCategoryData.services.length - 1 ? '1px solid #e0e0e0' : 'none',
                    py: 1.5,
                    px: { xs: 0.5, md: 1 },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: 2,
                      mb: service.description || service.note ? 0.75 : 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        fontWeight: 400,
                        color: '#1a1a1a',
                        flex: 1,
                      }}
                    >
                      {service.name}
                    </Typography>
                    {service.price && (
                      <Typography
                        sx={{
                          fontFamily: '"Crimson Text", serif',
                          fontSize: { xs: '0.9375rem', md: '1rem' },
                          fontWeight: 600,
                          color: '#1a1a1a',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {service.price}
                      </Typography>
                    )}
                  </Box>
                  {service.description && (
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.8125rem', md: '0.875rem' },
                        color: '#666',
                        fontStyle: 'italic',
                        lineHeight: 1.6,
                        mt: 0.5,
                      }}
                    >
                      {service.description}
                    </Typography>
                  )}
                  {service.note && (
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.75rem', md: '0.8125rem' },
                        color: '#888',
                        fontStyle: 'italic',
                        lineHeight: 1.5,
                        mt: 0.5,
                      }}
                    >
                      {service.note}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>

      {/* Section 05 - Reviews */}
      <Box 
        component="section" 
        id="reviews" 
        sx={{ 
          pt: { xs: 4, md: 5 }, 
          pb: { xs: 5, md: 6 },
          backgroundColor: '#1a1a1a',
          color: '#f5f5f5',
        }}
      >
        <Container>
          <Box 
            sx={{ 
              position: 'relative', 
              mb: { xs: 3, md: 4 },
                display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Section Marker with Vertical Rule */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 2, md: 4 },
                top: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Crimson Text", serif',
                  fontSize: '0.625rem',
                  fontWeight: 300,
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  color: '#d3d2d2',
                }}
              >
                05
              </Typography>
              <Box
                sx={{
                  width: '1px',
                  height: '60px',
                  backgroundColor: '#d3d2d2',
                }}
              />
            </Box>

            {/* Editorial Rule - Left-aligned */}
              <Box
                sx={{
                width: { xs: '100px', md: '140px' },
                  height: '1px',
                backgroundColor: '#d3d2d2',
                mb: { xs: 2, md: 2.5 },
                alignSelf: 'flex-start',
                ml: { xs: 6, md: 8 },
              }}
            />

            {/* Main heading */}
            <Typography
              variant="h1"
              sx={{
                textAlign: 'left',
                fontWeight: 900,
                textTransform: 'none',
                letterSpacing: '0.01em',
                color: '#f5f5f5',
                fontFamily: '"Caveat", cursive',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
                lineHeight: 1.2,
                mb: { xs: 2, md: 2.5 },
                position: 'relative',
                zIndex: 1,
                alignSelf: 'flex-start',
                ml: { xs: 6, md: 8 },
              }}
            >
              Reviews
            </Typography>

            {/* Reviews Intro Text with Vertical Rule */}
              <Box
                sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: { xs: 2, md: 3 },
                maxWidth: '700px',
                ml: { xs: 6, md: 8 },
                mb: { xs: 3, md: 4 },
                position: 'relative',
              }}
            >
              {/* Vertical Rule */}
              <Box
                sx={{
                  width: '1px',
                  height: { xs: '60px', md: '80px' },
                  backgroundColor: '#d3d2d2',
                  flexShrink: 0,
                  mt: 0.5,
                }}
              />
            <Typography
              sx={{
                  textAlign: 'left',
                  color: '#d3d2d2',
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  fontFamily: '"Crimson Text", serif',
                  lineHeight: 1.8,
                  fontWeight: 300,
                  letterSpacing: '0.03em',
                  flex: 1,
              }}
            >
                See what our clients have to say about their experience at No Choice.
            </Typography>
            </Box>

            {/* Reviews Carousel */}
            <Box
              sx={{
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
                mt: { xs: 4, md: 6 },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 4, md: 6 },
                  overflowX: 'auto',
                  overflowY: 'hidden',
                  scrollBehavior: 'smooth',
                  pb: 3,
                  px: { xs: 1, md: 0 },
                  '&::-webkit-scrollbar': {
                height: '2px',
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: 'transparent',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#d3d2d2',
                    borderRadius: '1px',
                  },
                }}
              >
                {[
                  {
                    name: 'Su L.',
                    date: 'Dec 5, 2025',
                    text: 'I rarely ever get my nails done but wanted to do them for the holidays. After browsing salons on Yelp, I found No Choice and messaged to set up an appointment. They got back to me within a few hours and I was able to come in as soon as the next day. The salon is brightly lit and everyone was welcoming. The manicure and pedicure was done at the same time and though the girls finished within an hour, I didn\'t feel rushed at all. They used a machine to buff off the dead skin on my feet, and they felt so soft after. Would highly recommend whether you need to get a mani/pedi or other beauty services done.',
                  },
                  {
                    name: 'Sheba S.',
                    date: 'Nov 20, 2025',
                    text: 'This was my first time at No Choice Nail Salon, and I had such a good experience. The vibe was super friendly, and the front desk made me feel welcome right away. They even offered free drinks. I did the Russian manicure as a first-time customer for $70, and honestly it was totally worth it. Kate did my nails and she was AMAZING. So gentle, really professional, and super detailed. For my first time getting a Russian manicure, I\'m honestly obsessed. I\'ll definitely be coming back!',
                  },
                  {
                    name: 'Adelle Amor S.',
                    date: 'Nov 1, 2025',
                    text: 'I scheduled with No Choice yesterday for a Gel X set and they did not disappoint! Right when I got in, they greeted me and asked me if I wanted a drink. Yana saw the state of my nails and recommended next steps to grow them out to be more strong. I did not feel pain whatsoever when she was in with the scissors on my cuticles! Yana was so kind, knowledgeable, and did AMAZING!! Already set my next appointment. I\'m so excited to find a salon just a walk away from my apartment!!!!',
                  },
                  {
                    name: 'Andrea M.',
                    date: 'Jul 18, 2025',
                    text: 'Had a great experience at Nochoice Nail Salon. I reached out via yelp and literally got a call a minute after submitting my inquiry. FREE Parking is available, which made everything even easier. The front desk person was warm and offered tea, coffee, sparkling or still water upon arrival. The space is clean, welcoming, and not at all intimidating. Mira was polite, efficient, and made the pedicure feel effortless. I loved the calm vibe--no forced chatter, comfy chairs, and Sex and the City playing in the background.',
                  },
                  {
                    name: 'Esther W.',
                    date: 'Sep 23, 2025',
                    text: 'My first time getting a Russian manicure and I am hooked! They were super quick and also offered me cold sparkling water. I got a manicure French and also pedicure and also hard gel, and 3d designs. They removed so much of my callouses I had from wearing heels which was amazing and the French tips looked amazing too!',
                  },
                  {
                    name: 'Nelise B.',
                    date: 'Nov 26, 2025',
                    text: 'Wow! So pleased with everything. Great service, friendly. Very happy with my toenails. Will definitely go back. For sure one of the best places in LA. It didn\'t feel rushed, i was so relaxed. Thank you for that.',
                  },
                  {
                    name: 'Nadia U.',
                    date: 'Apr 23, 2025',
                    text: 'Absolutely love this place! From the moment you walk in, you can feel the warmth and professionalism. The quality of work here is outstanding--truly some of the best I\'ve experienced. This salon is amazing! The staff is incredibly friendly, and the atmosphere is inviting and positive. The owner is clearly hands-on and dedicated, which shows in how smoothly everything runs. The service is consistently excellent, and the prices are surprisingly affordable. I\'m a forever client!',
                  },
                  {
                    name: 'Tasia C.',
                    date: 'Nov 15, 2025',
                    text: 'I\'ve been here now about 10 times and every time leave with perfect nails. The way they do it here is so different from everywhere else in LA, it\'s truly the best quality. Usually, the nails last me 3-4 weeks in perfect condition. I highly recommend this place, everyone there is so sweet and skilled!',
                  },
                  {
                    name: 'Angela J.',
                    date: 'Oct 15, 2025',
                    text: 'Everything was wonderful as usual. Thank you also for accommodating me for my added pedicure I appreciated that. You all are always 10/10',
                  },
                  {
                    name: 'Kimberly C.',
                    date: 'Sep 27, 2025',
                    text: 'I feel so lucky to have had this salon recommended to me. It\'s everything you could hope for and more. Service: incredible. I feel heard, understood, and taken care of. I have been getting my nails done for 15 years and this salon has been my favorite. So many refreshments to choose from. Each tech I have gone to has done fabulous work. This is not the place where only one tech is skilled. If you\'re hesitant, this is your sign. You\'ll love it.',
                  },
                ].map((review, index) => (
                  <Box
                    key={index}
                    sx={{
                      minWidth: { xs: '280px', md: '360px' },
                      maxWidth: { xs: '280px', md: '360px' },
                      border: '1px solid rgba(211, 210, 210, 0.3)',
                      borderRadius: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      flexShrink: 0,
                      p: { xs: 1.75, md: 2.5 },
                      transition: 'all 0.3s ease',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      '&:hover': {
                        borderColor: '#d3d2d2',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      },
                    }}
                  >
                    {/* Reviewer Name and Date */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        mb: 1.5,
                        gap: 2,
                        pb: 1.5,
                        borderBottom: '1px solid rgba(211, 210, 210, 0.2)',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"Crimson Text", serif',
                          fontSize: { xs: '0.75rem', md: '0.8125rem' },
                          fontWeight: 400,
                          color: '#f5f5f5',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {review.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: '"Crimson Text", serif',
                          fontSize: '0.625rem',
                          fontWeight: 300,
                          color: '#d3d2d2',
                          letterSpacing: '0.05em',
                          whiteSpace: 'nowrap',
                          textTransform: 'uppercase',
                        }}
                      >
                        {review.date}
                      </Typography>
                    </Box>

                    {/* Review Text */}
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.875rem', md: '0.9375rem' },
                        fontWeight: 300,
                        color: '#d3d2d2',
                        lineHeight: 1.8,
                        letterSpacing: '0.01em',
                        flex: 1,
                        display: '-webkit-box',
                        WebkitLineClamp: 7,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {review.text}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Subtle Yelp Link - Centered Under Reviews */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                  mt: { xs: 4, md: 5 },
                }}
              >
                <Box
                  component="a"
                  href="http://yelp.com/biz/no-choice-los-angeles-2#reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontFamily: '"Crimson Text", serif',
                    fontSize: { xs: '0.75rem', md: '0.8125rem' },
                    fontWeight: 300,
                    color: '#666',
                    textDecoration: 'none',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: ACCENT_COLOR,
                    },
                  }}
                >
                  All Reviews →
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Section 06 - School */}
      <Box component="section" id="school" sx={{ pt: { xs: 1, md: 1.5 }, pb: { xs: 4, md: 5 } }}>
        <Container>
          <Box 
            sx={{ 
              position: 'relative', 
              mb: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Section Marker with Vertical Rule */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 2, md: 4 },
                top: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Crimson Text", serif',
                  fontSize: '0.625rem',
                  fontWeight: 300,
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  color: ACCENT_COLOR,
                }}
              >
                06
              </Typography>
              <Box
                sx={{
                  width: '1px',
                  height: '60px',
                  backgroundColor: ACCENT_COLOR,
                }}
              />
            </Box>

            {/* Editorial Rule - Left-aligned */}
              <Box
                sx={{
                width: { xs: '100px', md: '140px' },
                  height: '1px',
                backgroundColor: ACCENT_COLOR,
                mb: { xs: 2, md: 2.5 },
                alignSelf: 'flex-start',
                ml: { xs: 6, md: 8 },
              }}
            />

            {/* Main heading */}
            <Typography
              variant="h1"
              sx={{
                textAlign: 'left',
                fontWeight: 900,
                textTransform: 'none',
                letterSpacing: '0.01em',
                color: '#1a1a1a',
                fontFamily: '"Caveat", cursive',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
                lineHeight: 1.2,
                mb: { xs: 2, md: 2.5 },
                position: 'relative',
                zIndex: 1,
                alignSelf: 'flex-start',
                ml: { xs: 6, md: 8 },
              }}
            >
              School
            </Typography>

            {/* School Intro Text with Vertical Rule */}
              <Box
                sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: { xs: 2, md: 3 },
                maxWidth: '700px',
                ml: { xs: 6, md: 8 },
                mb: { xs: 3, md: 4 },
                position: 'relative',
              }}
            >
              {/* Vertical Rule */}
              <Box
                sx={{
                  width: '1px',
                  height: { xs: '60px', md: '80px' },
                  backgroundColor: ACCENT_COLOR,
                  flexShrink: 0,
                  mt: 0.5,
                }}
              />
              <Typography
                sx={{
                  textAlign: 'left',
                  color: '#666',
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  fontFamily: '"Crimson Text", serif',
                  lineHeight: 1.8,
                  fontWeight: 300,
                  letterSpacing: '0.03em',
                  flex: 1,
                }}
              >
                More information will be available soon.
              </Typography>
            </Box>
          </Box>
        </Container>
          </Box>

      {/* Section 07 - Contact Us */}
      <Box 
        component="section" 
        id="contact" 
        sx={{ 
          pt: { xs: 4, md: 5 }, 
          pb: { xs: 5, md: 6 },
          backgroundColor: '#1a1a1a',
          color: '#f5f5f5',
        }}
      >
        <Container>
          <Box 
            sx={{ 
              position: 'relative', 
              mb: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Section Marker with Vertical Rule */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 2, md: 4 },
                top: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Crimson Text", serif',
                  fontSize: '0.625rem',
                  fontWeight: 300,
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                  color: '#d3d2d2',
                }}
              >
                07
              </Typography>
              <Box
                sx={{
                  width: '1px',
                  height: '60px',
                  backgroundColor: '#d3d2d2',
                }}
              />
            </Box>

            {/* Editorial Rule - Left-aligned */}
            <Box
              sx={{
                width: { xs: '100px', md: '140px' },
                height: '1px',
                backgroundColor: '#d3d2d2',
                mb: { xs: 2, md: 2.5 },
                alignSelf: 'flex-start',
                ml: { xs: 6, md: 8 },
              }}
            />

            {/* Main heading */}
            <Typography
              variant="h1"
              sx={{
                textAlign: 'left',
                fontWeight: 900,
                textTransform: 'none',
                letterSpacing: '0.01em',
                color: '#f5f5f5',
                fontFamily: '"Caveat", cursive',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
                lineHeight: 1.2,
                mb: { xs: 2, md: 2.5 },
                position: 'relative',
                zIndex: 1,
                alignSelf: 'flex-start',
                ml: { xs: 6, md: 8 },
              }}
            >
              Contact Us
            </Typography>

            {/* Contact Us Intro Text with Vertical Rule */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: { xs: 2, md: 3 },
                maxWidth: '700px',
                ml: { xs: 6, md: 8 },
                mb: { xs: 3, md: 4 },
                position: 'relative',
              }}
            >
              {/* Vertical Rule */}
              <Box
                sx={{
                  width: '1px',
                  height: { xs: '60px', md: '80px' },
                  backgroundColor: '#d3d2d2',
                  flexShrink: 0,
                  mt: 0.5,
                }}
              />
              <Typography
                sx={{
                  textAlign: 'left',
                  color: '#d3d2d2',
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  fontFamily: '"Crimson Text", serif',
                  lineHeight: 1.8,
                  fontWeight: 300,
                  letterSpacing: '0.03em',
                  flex: 1,
                }}
              >
                Get in touch with us to book your appointment or learn more about our services.
              </Typography>
            </Box>

            {/* Contact Information - Two Columns */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 4, md: 6 },
                width: '100%',
                maxWidth: '1200px',
                mt: { xs: 4, md: 5 },
                ml: { xs: 0, md: 0 },
                px: { xs: 2, md: 4 },
              }}
            >
              {/* Huntington Beach Location */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 2, md: 2.5 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Caveat", cursive',
                    fontSize: { xs: '1.75rem', md: '2rem' },
                    fontWeight: 700,
                    color: '#f5f5f5',
                    mb: { xs: 1, md: 1.5 },
                  }}
                >
                  Huntington Beach
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#d3d2d2',
                        fontWeight: 400,
                      }}
                    >
                      Address:
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#f5f5f5',
                        lineHeight: 1.6,
                      }}
                    >
                      18582 Beach Blvd Suite 21, Huntington Beach, CA 92648
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#d3d2d2',
                        fontWeight: 400,
                      }}
                    >
                      Phone:
                    </Typography>
                    <Box
                      component="a"
                      href="tel:+17473677958"
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#f5f5f5',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      +1 (747) 367-7958
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#d3d2d2',
                        fontWeight: 400,
                      }}
                    >
                      Email:
                    </Typography>
                    <Box
                      component="a"
                      href="mailto:lanochoice@gmail.com"
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#f5f5f5',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      lanochoice@gmail.com
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 0.5 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#d3d2d2',
                        fontWeight: 400,
                      }}
                    >
                      Instagram:
                    </Typography>
                    <Box
                      component="a"
                      href="https://www.instagram.com/nochoice_huntingtonbeach/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        '&:hover': {
                          opacity: 0.8,
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={iglogo}
                        alt="Instagram"
                        sx={{
                          width: { xs: '24px', md: '28px' },
                          height: { xs: '24px', md: '28px' },
                          display: 'block',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Google Maps Embed */}
                <Box
                  sx={{
                    mt: { xs: 1, md: 1.5 },
                    width: '100%',
                    height: { xs: '250px', md: '300px' },
                    borderRadius: 0,
                    overflow: 'hidden',
                    border: '1px solid rgba(211, 210, 210, 0.2)',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="a"
                    href="https://maps.app.goo.gl/H2jwtbVAz1k52rzL9"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(26, 26, 26, 0.7)',
                      textDecoration: 'none',
                      transition: 'background-color 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(26, 26, 26, 0.85)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.875rem', md: '0.9375rem' },
                        color: '#f5f5f5',
                        textAlign: 'center',
                      }}
                    >
                      View exact location on Google Maps →
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Los Angeles Location */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: 2, md: 2.5 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Caveat", cursive',
                    fontSize: { xs: '1.75rem', md: '2rem' },
                    fontWeight: 700,
                    color: '#f5f5f5',
                    mb: { xs: 1, md: 1.5 },
                  }}
                >
                  Los Angeles
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#d3d2d2',
                        fontWeight: 400,
                      }}
                    >
                      Address:
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#f5f5f5',
                        lineHeight: 1.6,
                      }}
                    >
                      3272 Motor Ave ste g, Los Angeles, CA 90034
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#d3d2d2',
                        fontWeight: 400,
                      }}
                    >
                      Phone:
                    </Typography>
                    <Box
                      component="a"
                      href="tel:+12133696550"
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#f5f5f5',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      +1 (213) 369-6550
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#d3d2d2',
                        fontWeight: 400,
                      }}
                    >
                      Email:
                    </Typography>
                    <Box
                      component="a"
                      href="mailto:lanochoice@gmail.com"
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#f5f5f5',
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      lanochoice@gmail.com
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 0.5 }}>
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        color: '#d3d2d2',
                        fontWeight: 400,
                      }}
                    >
                      Instagram:
                    </Typography>
                    <Box
                      component="a"
                      href="https://www.instagram.com/nochoice_la/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        '&:hover': {
                          opacity: 0.8,
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={iglogo}
                        alt="Instagram"
                        sx={{
                          width: { xs: '24px', md: '28px' },
                          height: { xs: '24px', md: '28px' },
                          display: 'block',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Google Maps Embed */}
                <Box
                  sx={{
                    mt: { xs: 1, md: 1.5 },
                    width: '100%',
                    height: { xs: '250px', md: '300px' },
                    borderRadius: 0,
                    overflow: 'hidden',
                    border: '1px solid rgba(211, 210, 210, 0.2)',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="a"
                    href="https://maps.app.goo.gl/yBRQhWUQkmU4tAod6"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(26, 26, 26, 0.7)',
                      textDecoration: 'none',
                      transition: 'background-color 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(26, 26, 26, 0.85)',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Crimson Text", serif',
                        fontSize: { xs: '0.875rem', md: '0.9375rem' },
                        color: '#f5f5f5',
                        textAlign: 'center',
                      }}
                    >
                      View exact location on Google Maps →
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
