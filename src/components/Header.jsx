import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useScrollTrigger,
} from '@mui/material';
import logo from '../assets/newnavbarlogo.png';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const navItems = [
    { label: 'Home', path: '#home' },
    { label: 'Services', path: '#services' },
    { label: 'Reviews', path: '#reviews' },
    { label: 'Policy', path: '#policy' },
    { label: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'reviews', 'policy', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    const hash = path.substring(1);
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: trigger ? '#a2a2a2' : 'transparent',
          backdropFilter: trigger ? 'blur(10px)' : 'none',
          boxShadow: trigger ? 2 : 0,
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1400px',
            mx: 'auto',
            width: '100%',
            px: { xs: 1.5, sm: 3, md: 4 },
            py: { xs: 1, sm: 1.5, md: 2 },
            minHeight: { xs: '64px', sm: 'auto' },
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="no choice logo"
            onClick={() => {
              const element = document.getElementById('home');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            sx={{
              height: { xs: '45px', sm: '70px', md: '80px' },
              width: 'auto',
              minWidth: { xs: '140px', sm: '240px', md: '280px' },
              maxWidth: { xs: '180px', sm: '320px', md: '360px' },
              objectFit: 'contain',
              cursor: 'pointer',
              filter: trigger ? 'none' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
              flexShrink: 0,
            }}
          />
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 0.75, sm: 1.5, md: 2 },
            alignItems: 'center',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            WebkitOverflowScrolling: 'touch',
            ml: { xs: 1, sm: 2 },
          }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                sx={{
                  color: trigger ? '#1a1a1a' : '#f5f5f5',
                  fontWeight: activeSection === item.path.substring(1) ? 600 : 400,
                  textDecoration: activeSection === item.path.substring(1) ? 'underline' : 'none',
                  textDecorationThickness: { xs: 1.5, sm: 2 },
                  textUnderlineOffset: { xs: 3, sm: 4 },
                  fontFamily: '"Crimson Text", serif',
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '0.9375rem' },
                  px: { xs: 1, sm: 1.5, md: 2 },
                  py: { xs: 0.5, sm: 1 },
                  minWidth: 'auto',
                  whiteSpace: 'nowrap',
                  textTransform: 'none',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

