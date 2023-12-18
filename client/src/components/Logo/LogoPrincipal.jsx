

import React from 'react';
import { Container, CssBaseline, } from '@mui/material';
import Logo from '../../assets/Logo.png'; 

const logoPincipal = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Logo
          src="../../assets/logo.png" // Cambia la URL por la ubicación de tu logotipo
          alt="Greencare"
          text="Greencare"
        />
      
      </div>
    </Container>
  );
};

export default logoPincipal;
