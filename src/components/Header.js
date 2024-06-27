import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Switch, Typography, Button, Avatar } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { toggleTheme } from '../redux/themeSlice'; 
import logo from '../images/logo1.jpg'; 

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const blogs = useSelector(state => state.blogs);
  const theme = useTheme();
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = useSelector(state => state.theme.isDarkMode); // Get dark mode state

  const uniqueCategories = [...new Set(blogs.map(blog => blog.category))]; // Include unique categories

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isActive = (path) => location.pathname === path;

  const handleThemeToggle = () => {
    dispatch(toggleTheme()); // Dispatch toggleTheme action
  };

  return (
    <AppBar 
      position="fixed"
      sx={{ 
        backgroundColor: '#3f51b5', 
        padding: '10px 0', 
        borderRadius: { xs: '0 0 16px 16px', md: '0 0 24px 24px' }
      }}
    >
      <Toolbar>
        {isSmallScreen && (
          <>
            <Avatar src={logo} alt="Kahani Korner Logo" sx={{ marginRight: 2 }} />
            <Typography variant="h6" sx={{ flexGrow: 1, color: '#ffffff' }}>
              Kahani Korner
            </Typography>
            <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
              <MenuIcon sx={{ color: '#ffffff' }} />
            </IconButton>
          </>
        )}
        {!isSmallScreen && (
          <>
            <Avatar src={logo} alt="Kahani Korner Logo" sx={{ marginRight: 2 }} />
            <Typography variant="h6" sx={{ flexGrow: 1, color: '#ffffff', display: { xs: 'none', sm: 'block' } }}>
              Kahani Korner
            </Typography>
            <Button 
              color="inherit" 
              onClick={() => navigate('/')} 
              sx={{
                color: isActive('/') ? '#ffeb3b' : '#ffffff',
                margin: '0 5px', 
                '&:hover': { backgroundColor: '#283593', color: '#ffeb3b' },
                '&:active': { backgroundColor: '#1a237e', color: '#ffeb3b', transform: 'scale(0.95)' },
                transition: 'all 0.3s ease-in-out'
              }}
            >
              All
            </Button>
            {uniqueCategories.map(category => (
              <Button 
                key={category} 
                color="inherit" 
                onClick={() => navigate(category === 'all' ? '/' : `/category/${category}`)}
                sx={{
                  color: isActive(category === 'all' ? '/' : `/category/${category}`) ? '#ffeb3b' : '#ffffff',
                  margin: '0 5px', 
                  '&:hover': { backgroundColor: '#283593', color: '#ffeb3b' },
                  '&:active': { backgroundColor: '#1a237e', color: '#ffeb3b', transform: 'scale(0.95)' },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
            <Button 
              color="inherit" 
              onClick={() => navigate('/create')}
              sx={{
                color: isActive('/create') ? '#ffeb3b' : '#ffffff',
                margin: '0 5px', 
                '&:hover': { backgroundColor: '#283593', color: '#ffeb3b' },
                '&:active': { backgroundColor: '#1a237e', color: '#ffeb3b', transform: 'scale(0.95)' },
                transition: 'all 0.3s ease-in-out'
              }}
            >
              Create Blog
            </Button>
            <IconButton onClick={handleThemeToggle} color="inherit" sx={{ marginLeft: 'auto' }}>
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </>
        )}
      </Toolbar>
      <AnimatePresence>
        {drawerOpen && (
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            PaperProps={{
              component: motion.div,
              initial: { x: '100%' },
              animate: { x: 0 },
              exit: { x: '100%' },
              transition: { type: 'spring', stiffness: 300 },
              sx: {
                backgroundColor: '#283593',
                padding: '20px'
              }
            }}
          >
            <List>
              <ListItem
                button
                onClick={() => { navigate('/'); toggleDrawer(); }}
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  '&:hover': { backgroundColor: '#3f51b5' },
                  backgroundColor: isActive('/') ? '#303f9f' : 'transparent',
                  color: isActive('/') ? '#ffeb3b' : '#ffffff',
                }}
              >
                <ListItemText primary="All" />
              </ListItem>
              {uniqueCategories.map(category => (
                <ListItem
                  button
                  key={category}
                  onClick={() => { navigate(`/category/${category}`); toggleDrawer(); }}
                  component={motion.div}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    '&:hover': { backgroundColor: '#3f51b5' },
                    backgroundColor: isActive(`/category/${category}`) ? '#303f9f' : 'transparent',
                    color: isActive(`/category/${category}`) ? '#ffeb3b' : '#ffffff',
                  }}
                >
                  <ListItemText primary={category.charAt(0).toUpperCase() + category.slice(1)} />
                </ListItem>
              ))}
              <ListItem
                button
                onClick={() => { navigate('/create'); toggleDrawer(); }}
                component={motion.div}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  '&:hover': { backgroundColor: '#3f51b5' },
                  backgroundColor: isActive('/create') ? '#303f9f' : 'transparent',
                  color: isActive('/create') ? '#ffeb3b' : '#ffffff',
                }}
              >
                <ListItemText primary="Create Blog" />
              </ListItem>
              <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ListItemText primary="Dark Mode" />
                <Switch
                  checked={isDarkMode}
                  onChange={handleThemeToggle}
                  color="default"
                />
              </ListItem>
            </List>
          </Drawer>
        )}
      </AnimatePresence>
    </AppBar>
  );
};

export default Header;
