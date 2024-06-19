import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import logo from '../../images/company-logo.png';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="xl">
            <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Box display="flex" alignItems="center" mb={2}>
            <img src={logo} alt="Company Logo" width="50" />
            <Typography variant="h6" ml={2}>
              Fabo
            </Typography>
          </Box>
          <Typography variant="body2">
            Copyright &copy; {new Date().getFullYear()} Fabo. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" mb={2}>
            Follow Us
          </Typography>
          <Box>
            <Link href="#" color="inherit" mr={2}>
              <Facebook />
            </Link>
            <Link href="#" color="inherit" mr={2}>
              <Twitter />
            </Link>
            <Link href="#" color="inherit" mr={2}>
              <Instagram />
            </Link>
            <Link href="#" color="inherit">
              <LinkedIn />
            </Link>
          </Box>
        </Grid>
        {/* Add more grid items for additional content */}
      </Grid>
          </Container>

        </Box>
    </ThemeProvider>
  );
}