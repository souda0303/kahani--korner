import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="relative"
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: '#3f51b5',
        padding: '10px 0',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        width: '100%'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="subtitle1" sx={{ color: '#ffffff', ml: 2 }}>
          © 2024 Kahani Korner. All rights reserved.
        </Typography>
        
        {!isSmallScreen && (
          <div sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
