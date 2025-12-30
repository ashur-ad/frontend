import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, CircularProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Lightbox from './Lightbox';
import { PlayArrow } from '@mui/icons-material';

const InstagramGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [paging, setPaging] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (after = '') => {
    try {
      setLoading(true);
      const url = after
        ? `/api/instagram?after=${after}`
        : '/api/instagram';
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch Instagram images');
      }

      const data = await response.json();
      
      if (data.items) {
        const filtered = data.items.filter(
          (item) => item.type === 'IMAGE' || item.type === 'CAROUSEL_ALBUM'
        );
        
        if (after) {
          setImages((prev) => [...prev, ...filtered]);
        } else {
          setImages(filtered);
        }
        
        setPaging(data.paging);
        setError(null);
      }
    } catch (err) {
      console.error('Instagram fetch error:', err);
      setError(err.message);
      // Fallback to local images
      loadFallbackImages();
    } finally {
      setLoading(false);
    }
  };

  const loadFallbackImages = () => {
    // Fallback to local images if Instagram API fails
    const localImages = [
      { id: '1', url: '/static/media/hero-main.196db23af0e368bfa80c.jpg', caption: 'Beautiful nails' },
      { id: '2', url: '/static/media/nails.4f4dcda4337c6a23d4ab.PNG', caption: 'Nail art' },
      { id: '3', url: '/static/media/lashes.5cea2dc84b546a44bd59.PNG', caption: 'Lash extensions' },
    ];
    setImages(localImages);
  };

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleLoadMore = () => {
    if (paging && paging.cursors && paging.cursors.after) {
      fetchImages(paging.cursors.after);
    }
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const handleLightboxPrevious = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (loading && images.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error && images.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography color="error">{error}</Typography>
        <Button onClick={fetchImages} sx={{ mt: 2 }}>
          Try Again
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={6} md={4} key={image.id || index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Box
                onClick={() => handleImageClick(index)}
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: 2,
                  '&:hover .overlay': {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={image.url || image.thumbnail_url}
                  alt={image.caption || `Gallery image ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    aspectRatio: '1',
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  {image.type === 'VIDEO' ? (
                    <PlayArrow sx={{ fontSize: 48 }} />
                  ) : (
                    image.caption && (
                      <Typography
                        variant="body2"
                        sx={{
                          p: 2,
                          textAlign: 'center',
                          maxHeight: '100%',
                          overflow: 'auto',
                        }}
                      >
                        {image.caption.substring(0, 100)}
                        {image.caption.length > 100 ? '...' : ''}
                      </Typography>
                    )
                  )}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {paging && paging.cursors && paging.cursors.after && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Load More'}
          </Button>
        </Box>
      )}

      <Lightbox
        images={images}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleLightboxNext}
        onPrevious={handleLightboxPrevious}
      />
    </>
  );
};

export default InstagramGallery;

