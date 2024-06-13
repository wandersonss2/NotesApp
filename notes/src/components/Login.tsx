import React from 'react';
import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const CustomContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const CustomBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #333366;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px; /* Largura fixa para o quadrado */
  height: 500px; /* Altura fixa para o quadrado */
`;

const CustomAvatar = styled(Avatar)`
  margin: 10px;
  background-color: #ffffff44;
`;

const CustomButton = styled(Button)`
  margin: 20px 0;
`;

const CustomRegisterButton = styled(Button)`
  margin-top: 20px;
  background-color: #000044;
  color: #fff;
  &:hover {
    background-color: #000033;
  }
`;

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    onLogin();
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <CustomContainer maxWidth="xs">
      <CssBaseline />
      <CustomBox>
        <CustomAvatar>
          <LockOutlinedIcon style={{ color: '#fff' }} />
        </CustomAvatar>
        <Typography component="h1" variant="h5" style={{ color: '#fff' }}>
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </CustomButton>
          <CustomRegisterButton
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleRegister}
          >
            Register
          </CustomRegisterButton>
        </Box>
      </CustomBox>
    </CustomContainer>
  );
};

export default Login;

export {};
