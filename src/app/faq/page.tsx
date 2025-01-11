'use client';
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid2 as Grid,
  Button,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaymentIcon from '@mui/icons-material/Payment';
import SupportIcon from '@mui/icons-material/Support';

const faqSections = {
  shopping: {
    icon: <StorefrontIcon />,
    title: 'Shopping & Orders',
    questions: [
      {
        question: 'Do you ship nationwide?',
        answer:
          'Yes, we offer shipping across the United States. Delivery times and costs vary by location.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards, debit cards, PayPal, and bank transfers for money transfer services.',
      },
      {
        question: 'How can I track my order?',
        answer:
          'Once your order is shipped, you will receive a tracking number via email to monitor your delivery status.',
      },
      {
        question: 'Do you have a minimum order requirement?',
        answer:
          'For local delivery, orders must be at least $30. For nationwide shipping, the minimum order is $50.',
      },
    ],
  },
  shipping: {
    icon: <LocalShippingIcon />,
    title: 'Shipping & International Services',
    questions: [
      {
        question: 'How long does shipping to Africa typically take?',
        answer:
          'Shipping times vary by destination. Air freight typically takes 5-7 business days, while sea freight can take 4-6 weeks.',
      },
      {
        question: 'What items can I ship internationally?',
        answer:
          'We can ship most non-perishable items. However, there are restrictions on certain foods, liquids, and other items. Please contact us for specific item inquiries.',
      },
      {
        question: 'Do you provide shipping insurance?',
        answer:
          'Yes, we offer shipping insurance for all international shipments. The cost is based on the declared value of the items.',
      },
      {
        question: 'Which African countries do you ship to?',
        answer:
          'We currently ship to Nigeria, Ghana, Kenya, Uganda, Tanzania, and South Africa. Contact us for other destinations.',
      },
    ],
  },
  payment: {
    icon: <PaymentIcon />,
    title: 'Money Transfer & Payments',
    questions: [
      {
        question: 'How fast are your money transfer services?',
        answer:
          'Most transfers are completed within 24-48 hours. We also offer express service with same-day delivery to select locations.',
      },
      {
        question: 'What information do I need for money transfers?',
        answer:
          "You'll need the recipient's full name, location, phone number, and bank details (for bank transfers) or mobile money account information.",
      },
      {
        question: 'Are there transfer limits?',
        answer:
          'Yes, limits vary by destination and method. Standard transfers have a maximum of $3,000 per transaction. Higher limits are available with additional verification.',
      },
      {
        question: 'What are your exchange rates?',
        answer:
          'We offer competitive exchange rates that are updated daily. Contact us or check our money transfer page for current rates.',
      },
    ],
  },
  support: {
    icon: <SupportIcon />,
    title: 'Customer Support',
    questions: [
      {
        question: 'What are your business hours?',
        answer:
          'Our store is open Monday-Saturday, 9am-7pm EST. Online support is available 24/7 for urgent inquiries.',
      },
      {
        question: 'How can I contact customer service?',
        answer:
          'You can reach us by phone, email, or through our contact form. We aim to respond to all inquiries within 24 hours.',
      },
      {
        question: 'What is your return policy?',
        answer:
          'We accept returns of unopened items within 14 days of delivery. Special conditions apply for food items and international shipments.',
      },
      {
        question: 'Do you offer bulk ordering for businesses?',
        answer:
          'Yes, we offer wholesale pricing and special services for business customers. Contact our business team for details.',
      },
    ],
  },
};

const FAQPage = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ py: 6, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Stack spacing={2} sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" fontWeight="bold">
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            Find answers to common questions about our products, services, and
            policies
          </Typography>
        </Stack>

        {/* FAQ Sections */}
        <Grid container spacing={4}>
          {Object.entries(faqSections).map(([key, section]) => (
            <Grid size={{ xs: 12 }} key={key}>
              <Box sx={{ mb: 4 }}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ mb: 3 }}
                >
                  <Box sx={{ color: 'secondary.main' }}>{section.icon}</Box>
                  <Typography variant="h5" component="h2" fontWeight="bold">
                    {section.title}
                  </Typography>
                </Stack>

                {section.questions.map((item, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `${key}-${index}`}
                    onChange={handleChange(`${key}-${index}`)}
                    sx={{
                      mb: 1,
                      '&:before': { display: 'none' },
                      boxShadow: 'none',
                      '&:not(:last-child)': {
                        borderBottom: 1,
                        borderColor: 'divider',
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        '&:hover': { bgcolor: 'background.paper' },
                      }}
                    >
                      <Typography fontWeight="medium">
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography color="text.secondary">
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Contact CTA */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Couldn&#39;t find what you&#39;re looking for?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Our customer service team is here to help with any questions.
          </Typography>
          <Button
            variant="contained"
            href="/contact"
            sx={{
              bgcolor: 'secondary.main',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'secondary.light',
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQPage;
