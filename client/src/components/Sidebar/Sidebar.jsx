import React from 'react';
import { styled } from '@mui/system';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Typography } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import FeedIcon from '@mui/icons-material/Feed';
import MenuIcon from '@mui/icons-material/Menu';
import { Hidden } from '@mui/material';

const DrawerWrapper = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: 240,
    flexShrink: 0,
  },
}));

const LogoWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Hidden smUp>
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={handleDrawerToggle} variant="temporary">
          <LogoWrapper>
            <Typography variant="h6">Logo</Typography>
          </LogoWrapper>
          <List>
            <ListItem button key="inicio" onClick={handleDrawerToggle}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItem>
            <ListItem button key="notificaciones" onClick={handleDrawerToggle}>
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Notificaciones" />
            </ListItem>
            <ListItem button key="perfil" onClick={handleDrawerToggle}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Perfil" />
            </ListItem>
            <ListItem button key="noticias" onClick={handleDrawerToggle}>
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText primary="Noticias" />
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <DrawerWrapper variant="permanent" anchor="left">
          <LogoWrapper>
            <Typography variant="h6">Logo</Typography>
          </LogoWrapper>
          <List>
            <ListItem button key="inicio">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItem>
            <ListItem button key="notificaciones">
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Notificaciones" />
            </ListItem>
            <ListItem button key="perfil">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Perfil" />
            </ListItem>
            <ListItem button key="noticias">
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText primary="Noticias" />
            </ListItem>
          </List>
        </DrawerWrapper>
      </Hidden>
    </>
  );
}

export default Sidebar;
