import { Box, Container, Typography, Link, Stack } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 4 }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', sm: 'flex-start' }}
        >
          {/* Left Section */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Tenenghang Foundation
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 300 }}>
              Dedicated to upgrading standards of living through indigenous and self-reliant development initiatives.
            </Typography>
          </Box>

          {/* Middle Section */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Home
              </Link>
              <Link href="/about" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                About Us
              </Link>
              <Link href="/scholarship-awards" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Scholarship Awards
              </Link>
            </Stack>
          </Box>

          {/* Right Section */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              Contact
            </Typography>
            <Typography variant="body2">
              Cow Street, Bamenda
            </Typography>
            <Typography variant="body2">
              North West Region, Cameroon
            </Typography>
          </Box>
        </Stack>

        {/* Copyright */}
        <Box sx={{ 
          mt: 3, 
          pt: 2, 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center' 
        }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Tenenghang Foundation. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 