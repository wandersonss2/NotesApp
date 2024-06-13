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
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px; /* Largura fixa para o quadrado */
`;

const CustomAvatar = styled(Avatar)`
  margin: 10px;
  background-color: #333366;
`;

const CustomButton = styled(Button)`
  margin: 20px 0;
`;

interface RegistrationFormProps {
  onRegister: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onRegister }) => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de registro
    onRegister();
    navigate('/');
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <CustomContainer maxWidth="xs">
      <CssBaseline />
      <CustomBox>
        <CustomAvatar>
          <LockOutlinedIcon style={{ color: '#fff' }} />
        </CustomAvatar>
        <Typography component="h1" variant="h5">
          Register New Account
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
          />
          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </CustomButton>
          <Button
            type="button"
            fullWidth
            variant="outlined"
            color="secondary"
            sx={{ mt: 1 }}
            onClick={handleBackToLogin}
          >
            Back to Login
          </Button>
        </Box>
      </CustomBox>
    </CustomContainer>
  );
};

export default RegistrationForm;


