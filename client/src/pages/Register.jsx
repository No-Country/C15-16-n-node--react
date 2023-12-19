<h1>Registro</h1>
/*
import React, { useState } from 'react';
import { TextField, Button, Container } from '@material-ui/core';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos de registro
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <Container maxWidth="sm">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Registrarse
        </Button>
      </form>
    </Container>
  );
}

export default Register; */