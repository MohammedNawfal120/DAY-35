import React, { useState } from 'react';
import {
  Alert, AppBar, Box, Button, Chip, Container, Divider,
  Paper, Stack, TextField, Toolbar, Typography,
} from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ProductCard from './components/ProductCard';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError(true);
      setMessage('Enter your email and password.');
      return;
    }
    setError(false);
    setMessage(`Demo login submitted for ${email}.`);
  }

  function handleClear() {
    setEmail('');
    setPassword('');
    setMessage('');
    setError(false);
  }

  return (
    <Box sx={{ minHeight: '100vh', pb: 6 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" fontWeight={800} sx={{ flexGrow: 1 }}>
            Material UI Studio
          </Typography>
          <Chip label="DAY 35" sx={{ bgcolor: 'white', color: 'primary.main',
            fontWeight: 800 }} />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 7 } }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="overline" color="secondary.main" fontWeight={800}>
            React + Material UI
          </Typography>
          <Typography variant="h4" gutterBottom>ThemeProvider Assignment</Typography>
          <Typography color="text.secondary">
            A themed login form and product card built entirely with MUI components.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: {
          xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 1fr)' }, gap: 3 }}>
          <Paper elevation={0} sx={{ p: { xs: 3, sm: 4 }, border: '1px solid #e8eaf3' }}>
            <Typography variant="h5" gutterBottom>Welcome back</Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Enter your details to try the MUI login form.
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Stack spacing={2.5}>
                <TextField label="Email address" type="email" fullWidth required
                  value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" type="password" fullWidth required
                  value={password} onChange={(e) => setPassword(e.target.value)} />
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                  <Button type="submit" variant="contained" size="large"
                    startIcon={<LoginOutlinedIcon />} sx={{ flex: 1 }}>
                    Login
                  </Button>
                  <Button variant="outlined" size="large" color="secondary"
                    startIcon={<RestartAltIcon />} onClick={handleClear}>
                    Clear
                  </Button>
                </Stack>
                {message && <Alert severity={error ? 'error' : 'success'}>
                  {message}
                </Alert>}
              </Stack>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Typography variant="body2" color="text.secondary">
              Demo only: no real authentication or server connection is used.
            </Typography>
          </Paper>
          <ProductCard />
        </Box>

        <Paper elevation={0} sx={{ mt: 3, p: 3, border: '1px solid #e8eaf3' }}>
          <Typography fontWeight={700} gutterBottom>Reusable MUI Buttons</Typography>
          <Stack direction="row" flexWrap="wrap" gap={1.5}>
            <Button variant="contained" onClick={() => setMessage('Primary button clicked!')}>
              Primary
            </Button>
            <Button variant="outlined" color="secondary"
              onClick={() => setMessage('Secondary button clicked!')}>
              Secondary
            </Button>
            <Button variant="text" onClick={handleClear}>Reset Form</Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
