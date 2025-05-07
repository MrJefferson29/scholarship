import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Logo from './Logo';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Scholarship Awards', path: '/scholarship-awards' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => location.pathname === path;

  const drawer = (
    <List sx={{ pt: 2 }}>
      {navItems.map((item) => (
        <ListItem 
          button 
          component={Link} 
          to={item.path} 
          key={item.text}
          onClick={handleDrawerToggle}
          sx={{
            mb: 1,
            borderRadius: '8px',
            mx: 1,
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
            },
            bgcolor: isActive(item.path) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            borderLeft: isActive(item.path) ? '4px solid white' : 'none',
          }}
        >
          <ListItemText 
            primary={item.text}
            primaryTypographyProps={{
              fontWeight: isActive(item.path) ? 600 : 500,
              color: 'white',
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          <Logo />
        </Link>
        
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                '& .MuiDrawer-paper': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  width: 240,
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{
                  position: 'relative',
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  fontWeight: isActive(item.path) ? 600 : 500,
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: isActive(item.path) ? 'translateX(-50%)' : 'translateX(-50%) scaleX(0)',
                    width: '80%',
                    height: '2px',
                    bgcolor: 'white',
                    transition: 'transform 0.3s ease-in-out',
                  },
                  '&:hover::after': {
                    transform: 'translateX(-50%) scaleX(1)',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 