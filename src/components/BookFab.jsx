import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { EventNote } from '@mui/icons-material';

const BookFab = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.open('https://www.vagaro.com/nochoice', '_blank');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 1000,
          }}
        >
          <Fab
            color="secondary"
            aria-label="book appointment"
            onClick={handleClick}
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <EventNote />
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookFab;

