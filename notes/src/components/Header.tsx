// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/Header.css'; // Importando o arquivo CSS

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica de logout: remover o token de autenticação, etc.
    localStorage.removeItem('token'); // Exemplo de remoção de token do localStorage
    navigate('/login'); // Redirecionar para a página de login
  };

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
          <NavLink to="/login" onClick={handleLogout} className="nav-link logout-button">
            Logout
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
