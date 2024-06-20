// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../css/Header.css'; // Importando o arquivo CSS

const Header: React.FC = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Box className="nav-links">
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
          <NavLink to="/events" className="nav-link">
            Events
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
