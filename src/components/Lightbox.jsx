import React, { useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Close, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrevious }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrevious();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  if (!images || images.length === 0 || currentIndex === null) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'white',
            zIndex: 10000,
          }}
        >
          <Close />
        </IconButton>

        {images.length > 1 && (
          <>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
              sx={{
                position: 'absolute',
                left: 16,
                color: 'white',
                zIndex: 10000,
              }}
            >
              <ArrowBackIos />
            </IconButton>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              sx={{
                position: 'absolute',
                right: 16,
                color: 'white',
                zIndex: 10000,
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </>
        )}

        <Box
          component={motion.img}
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          src={currentImage.url}
          alt={currentImage.caption || `Image ${currentIndex + 1}`}
          onClick={(e) => e.stopPropagation()}
          sx={{
            maxWidth: '90%',
            maxHeight: '90%',
            objectFit: 'contain',
            cursor: 'default',
          }}
        />

        {(currentImage.caption || images.length > 1) && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              p: 2,
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {images.length > 1 && (
              <Typography variant="body2" sx={{ mb: 1 }}>
                {currentIndex + 1} / {images.length}
              </Typography>
            )}
            {currentImage.caption && (
              <Typography variant="body1">{currentImage.caption}</Typography>
            )}
          </Box>
        )}
      </Box>
    </AnimatePresence>
  );
};

export default Lightbox;

