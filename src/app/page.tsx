'use client';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const featuredCategories = [
  {
    title: 'African Spices',
    image: '/images/spice.png',
    description: 'Authentic spices and seasonings from across Africa',
  },
  {
    title: 'Afro-Caribbean Drinks',
    image: '/images/ovatine.png',
    description: 'Refreshing beverages and traditional drinks',
  },
  {
    title: 'Fresh Produce',
    image: '/images/meat.png',
    description: 'Tropical fruits and vegetables',
  },
  {
    title: 'Grains & Staples',
    image: '/images/rice.png',
    description: 'Essential pantry items from both regions',
  },
];

export default function Home() {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(45deg, #2B4C3F 0%, #1A3027 100%)',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  mb: 2,
                }}
              >
                Authentic African & Caribbean Groceries
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Bringing the flavors of Africa and the Caribbean to your
                doorstep
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: 'warning.main',
                  '&:hover': { bgcolor: 'warning.dark' },
                }}
              >
                Shop Now
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/images/bg-new.png"
                alt="Featured products"
                sx={{
                  width: '100%',
                  maxWidth: 600,
                  height: 'auto',
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Categories */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            mb: 4,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Explore Our Categories
        </Typography>
        <Grid container spacing={3}>
          {featuredCategories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={category.image}
                  alt={category.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' } }}
            >
              Fresh Ingredients, Authentic Flavors
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600 }}>
              We source our products directly from trusted suppliers in Africa
              and the Caribbean to ensure you get the most authentic ingredients
              for your favorite dishes.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                bgcolor: theme.palette.primary.main,
                '&:hover': { bgcolor: theme.palette.primary.dark },
              }}
            >
              View All Products
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
