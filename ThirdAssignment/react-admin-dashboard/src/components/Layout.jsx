import React from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Layout.css';

const Layout = () => {
  const [themeMode, setThemeMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="layout-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content-container">
          <div className="navbar">
            <Navbar setThemeMode={setThemeMode} themeMode={themeMode} />
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
