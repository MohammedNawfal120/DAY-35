import React, { useState } from 'react';
import {
  Box, Button, Card, CardActions, CardContent, CardHeader,
  Chip, Stack, Typography,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ProductCard() {
  const [favorite, setFavorite] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <Card sx={{ height: '100%', border: '1px solid #e8eaf3' }}>
      <CardHeader
        title="Featured Product"
        subheader="MUI Card: header, content and actions"
        action={<Chip color="secondary" size="small" label="Popular" />}
      />
      <Box sx={{ mx: 2, borderRadius: 3, p: 4, textAlign: 'center',
        background: 'linear-gradient(135deg,#e0e7ff,#ccfbf1)',
        fontSize: 80 }} role="img" aria-label="Headphones illustration">
        🎧
      </Box>
      <CardContent>
        <Typography variant="h5" gutterBottom>Wireless Headphones</Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          Comfortable over-ear headphones with clear audio and long battery life.
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="h5" color="primary.main">₹2,499</Typography>
          <Chip label="In stock" color="success" variant="outlined" size="small" />
        </Stack>
        {added && <Typography color="success.main" sx={{ mt: 2 }}>
          Added to your demo cart!
        </Typography>}
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, gap: 1, flexWrap: 'wrap' }}>
        <Button variant="contained" startIcon={<ShoppingCartOutlinedIcon />}
          onClick={() => setAdded(true)}>
          {added ? 'Added to cart' : 'Add to cart'}
        </Button>
        <Button variant="outlined" color="secondary"
          startIcon={favorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
          onClick={() => setFavorite(!favorite)}>
          {favorite ? 'Saved' : 'Save'}
        </Button>
      </CardActions>
    </Card>
  );
}
