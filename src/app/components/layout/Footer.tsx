import { AppData } from '@/app/data';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid2 as Grid,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
  Email,
} from '@mui/icons-material';
import Image from 'next/image';
const iconMap: { [key: string]: React.ReactNode } = {
  facebook: <Facebook />,
  twitter: <Twitter />,
  instagram: <Instagram />,
  linkedin: <LinkedIn />,
};
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  const contactInfo = [
    {
      icon: <LocationOn />,
      text: AppData.address || '123 African Market Street, City, State',
    },
    {
      icon: <Phone />,
      text: AppData.phone || '+1 234 567 8900',
      href: `tel:${AppData.phone}`,
    },
    {
      icon: <Email />,
      text: AppData.adminEmail[0] || 'info@anuoluwa.com',
      href: `mailto:${AppData.adminEmail[0]}`,
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 3 }}>
              <Image
                src="/images/logo.png"
                alt={`${AppData.name} Logo`}
                width={150}
                height={50}
                priority
              />
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              {AppData.footer.message1}
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
              {AppData.footer.message2}
            </Typography>
            <Stack direction="row" spacing={1}>
              {AppData.socials.map((social) => (
                <IconButton
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'secondary.main',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  {iconMap[social.name.toLowerCase()] || social.name}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links Column */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Stack spacing={2}>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  sx={{
                    color: 'white',
                    opacity: 0.9,
                    textDecoration: 'none',
                    '&:hover': {
                      opacity: 1,
                      color: 'secondary.main',
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info Column */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              {contactInfo.map((info, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  component={Link}
                  href={info.href}
                  sx={{
                    color: 'white',
                    opacity: 0.9,
                    textDecoration: 'none',
                    '&:hover': {
                      opacity: 1,
                      color: 'secondary.main',
                    },
                  }}
                >
                  <Box sx={{ color: 'secondary.main' }}>{info.icon}</Box>
                  <Typography variant="body2">{info.text}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* Newsletter Column */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Subscribe for latest updates and exclusive offers
            </Typography>
            <Box component="form" onSubmit={(e) => e.preventDefault()}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                type="email"
                required
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  bgcolor: 'secondary.main',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'secondary.light',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.12)' }} />

        <Typography variant="body2" align="center" sx={{ opacity: 0.9 }}>
          © {currentYear} {AppData.name}. Powered by{' '}
          <Link
            href="https://reachai.online"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: 'secondary.main',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            ReachAI
          </Link>
          . All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
