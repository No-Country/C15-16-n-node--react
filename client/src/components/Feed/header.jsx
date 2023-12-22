import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Box,
  Divider,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const AppBarStyled = styled(AppBar)({
    zIndex: (theme) => theme.zIndex.drawer + 1,
  backgroundColor: 'GrayText',
  
});

const FlexSpace = styled(Box)({
  flexGrow: 1,
  marginLeft: (theme) => theme.spacing(2),
});

const MenuButton = styled(IconButton)(({ theme }) => ({
    marginRight: theme.spacing(15),
    color: '#0b624f', 
  }));

const Header = () => {
  return (
    <AppBarStyled position="sticky">
      <Toolbar>
        <MenuButton edge="start" color="success" >
          
        </MenuButton>
        <Typography variant="h6" noWrap>
          Inicio
        </Typography>

        <FlexSpace>
          <SearchIcon />
          <InputBase
            placeholder="Buscar..."
            inputProps={{ 'aria-label': 'buscar' }}
          />
        </FlexSpace>

        
      </Toolbar>
      <Box display="flex" justifyContent="center">
      <Button color="inherit" component={Link} to="/publicaciones">
        Publicaciones
      </Button>
      <Divider orientation="vertical" flexItem />
      <Button color="inherit" component={Link} to="/etiquetas">
        Etiquetas
      </Button>
      <Divider orientation="vertical" flexItem />
      <Button color="inherit" component={Link} to="/news">
        Noticias
      </Button>
    </Box>
    </AppBarStyled>
    
  );
};

export default Header;