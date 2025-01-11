'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid2 as Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Chip,
  Stack,
  Button,
  Rating,
  SelectChangeEvent,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FilterListIcon from '@mui/icons-material/FilterList';

const products = [
  {
    id: 1,
    name: 'Ovaltine Malt Drink',
    category: 'Beverages',
    price: 0.0,
    rating: 4.5,
    image: '/images/ovatine.png',
    origin: 'Nigeria',
  },
  {
    id: 2,
    name: 'Rice Bag',
    category: 'Grains & Flours',
    price: 0.0,
    rating: 5,
    image: '/images/rice.png',
    origin: 'Nigeria',
  },
  {
    id: 3,
    name: 'Fresh Meat',
    category: 'Fresh Produce',
    price: 0.0,
    rating: 4,
    image: '/images/meat.png',
    origin: 'Nigeria',
  },
  {
    id: 4,
    name: 'Spice Mix',
    category: 'Spices & Seeds',
    price: 0.0,
    rating: 4.5,
    image: '/images/spice.png',
    origin: 'Nigeria',
  },
];

const categories = [
  'All',
  'Spices & Seeds',
  'Oils & Condiments',
  'Grains & Flours',
  'Snacks',
  'Beverages',
  'Fresh Produce',
];

const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest Arrivals' },
  { value: 'price_low', label: 'Price: Low to High' },
  { value: 'price_high', label: 'Price: High to Low' },
];

const ShopPage = () => {
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 2, fontWeight: 'bold' }}
        >
          Shop Our Products
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Discover authentic African and Caribbean groceries
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              label="Category"
              onChange={handleCategoryChange}
              startAdornment={<FilterListIcon sx={{ mr: 1 }} />}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <FormControl fullWidth>
            <InputLabel>Sort By</InputLabel>
            <Select value={sortBy} label="Sort By" onChange={handleSortChange}>
              {sortOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{ display: 'flex' }}
          >
            <TextField
              fullWidth
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton type="submit">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </Box>
        </Grid>
      </Grid>
      {/* Active Filters */}
      <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
        {category !== 'All' && (
          <Chip
            label={category}
            onDelete={() => setCategory('All')}
            color="primary"
            variant="outlined"
          />
        )}
        {searchQuery && (
          <Chip
            label={`Search: ${searchQuery}`}
            onDelete={() => setSearchQuery('')}
            color="primary"
            variant="outlined"
          />
        )}
      </Stack>
      {/* Products Grid */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
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
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {product.category}
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Origin: {product.origin}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating
                    value={product.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    ({product.rating})
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    size="small"
                    sx={{
                      bgcolor: 'secondary.main',
                      '&:hover': {
                        bgcolor: 'secondary.dark',
                      },
                    }}
                  >
                    Add
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button variant="outlined" size="large" sx={{ minWidth: 200 }}>
          Load More Products
        </Button>
      </Box>
    </Container>
  );
};

export default ShopPage;
