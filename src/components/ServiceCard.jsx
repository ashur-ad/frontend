import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index = 0 }) => {
  const handleBookService = () => {
    window.open('https://www.vagaro.com/nochoice', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: 6,
          },
        }}
      >
        {service.image && (
          <CardMedia
            component="img"
            height="200"
            image={service.image}
            alt={service.title}
            sx={{ objectFit: 'cover' }}
          />
        )}
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
              {service.title}
            </Typography>
            {service.featured && (
              <Chip label="Popular" color="secondary" size="small" />
            )}
          </Box>
          {service.price && (
            <Typography variant="h6" color="secondary" sx={{ mb: 2, fontWeight: 600 }}>
              {service.price}
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
            {service.description}
          </Typography>
          {service.benefits && service.benefits.length > 0 && (
            <List dense sx={{ mb: 2 }}>
              {service.benefits.map((benefit, idx) => (
                <ListItem key={idx} disablePadding sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircle color="secondary" sx={{ fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={benefit}
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
              ))}
            </List>
          )}
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleBookService}
            sx={{ mt: 'auto' }}
          >
            Book This Service
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;

