import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Navbar = ({ setThemeMode, themeMode }) => {
  const handleThemeChange = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Switch checked={themeMode === 'dark'} onChange={handleThemeChange} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
