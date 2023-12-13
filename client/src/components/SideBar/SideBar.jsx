import React from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TwitterIcon from '@mui/icons-material/Twitter';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItemButton>
            <TwitterIcon fontSize="large" color="primary" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Inicio" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Notificaciones" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Perfil" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Noticias" />
          </ListItemButton>
        </List>
      </Drawer>
      <main className={classes.content}>
      </main>
    </div>
  );
};

export default Sidebar;
