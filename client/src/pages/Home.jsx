import React from 'react';
import { Grid, Typography, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

const Home = () => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        {/* Logo */}
        <Avatar alt="Logo" src="../assets/logo.png" />
      </Grid>
      <Grid item>
        {/* Inicio */}
        <HomeIcon />
        <Typography>Inicio</Typography>
      </Grid>
      <Grid item>
        {/* Notificaciones */}
        <NotificationsIcon />
        <Typography>Notificaciones</Typography>
      </Grid>
      <Grid item>
        {/* Perfil */}
        <PersonIcon />
        <Typography>Perfil</Typography>
      </Grid>
      <Grid item>
        {/* Noticias */}
        <MailIcon />
        <Typography>Noticias</Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
