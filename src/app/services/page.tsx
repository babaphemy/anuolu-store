import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const services = [
  {
    id: 1,
    title: 'Money Transfer to Africa',
    icon: <SendIcon sx={{ fontSize: 40 }} />,
    description:
      'Fast and secure money transfer services to multiple African countries.',
    features: [
      'Competitive exchange rates',
      'Same-day transfers available',
      'Secure transaction processing',
      'Mobile money transfers',
      'Bank deposits',
    ],
    cta: 'Send Money Now',
    link: '/money-transfer',
  },
  {
    id: 2,
    title: 'International Shipping',
    icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
    description:
      'Reliable shipping services for personal and commercial goods.',
    features: [
      'Door-to-door delivery',
      'Sea and air freight options',
      'Package tracking',
      'Customs clearance assistance',
      'Insurance coverage',
    ],
    cta: 'Get Shipping Quote',
    link: '/shipping',
  },
  {
    id: 3,
    title: 'Cargo & Haulage',
    icon: <InventoryIcon sx={{ fontSize: 40 }} />,
    description: 'Commercial cargo and haulage solutions for businesses.',
    features: [
      'Container shipping',
      'Bulk cargo handling',
      'Warehousing solutions',
      'Import/Export assistance',
      'Documentation support',
    ],
    cta: 'Request Quote',
    link: '/cargo',
  },
];

const benefits = [
  {
    icon: <SecurityIcon />,
    title: 'Secure & Reliable',
    description:
      'Licensed and regulated services with full transaction security',
  },
  {
    icon: <SpeedIcon />,
    title: 'Fast Processing',
    description: 'Quick turnaround times for all our services',
  },
  {
    icon: <SupportAgentIcon />,
    title: '24/7 Support',
    description: 'Round-the-clock customer support in multiple languages',
  },
];

const ServicesPage = () => {
  return (
    <Box sx={{ py: 6, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Stack spacing={2} sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" fontWeight="bold">
            Our Services
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            Connecting Africa and the rest of the world with reliable money
            transfer and shipping solutions
          </Typography>
        </Stack>

        {/* Main Services */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {services.map((service) => (
            <Grid item xs={12} md={4} key={service.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                  },
                  transition: 'all 0.2s',
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      color: 'secondary.main',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    textAlign="center"
                    fontWeight="bold"
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    textAlign="center"
                    paragraph
                  >
                    {service.description}
                  </Typography>
                  <List>
                    {service.features.map((feature, index) => (
                      <ListItem key={index} disableGutters>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color="secondary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Button
                      variant="contained"
                      href={service.link}
                      size="large"
                      sx={{
                        bgcolor: 'secondary.main',
                        '&:hover': {
                          bgcolor: 'secondary.dark',
                        },
                      }}
                    >
                      {service.cta}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ mb: 8 }} />

        {/* Benefits Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
            fontWeight="bold"
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Stack
                  alignItems="center"
                  spacing={2}
                  sx={{
                    textAlign: 'center',
                    height: '100%',
                    p: 3,
                  }}
                >
                  <Box sx={{ color: 'secondary.main' }}>{benefit.icon}</Box>
                  <Typography variant="h6" fontWeight="bold">
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            p: 6,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom fontWeight="bold">
            Need Assistance with Our Services?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Our team is ready to help you with any questions about our services
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/contact"
            sx={{
              bgcolor: 'secondary.main',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'secondary.light',
              },
            }}
          >
            Contact Us Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage;
