import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
  const links = ['Publicaciones', 'Etiquetas', 'Noticias'];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      justifyContent={isSmallScreen ? 'center' : 'space-around'}
      alignItems="center"
      height="100%"
    >
      {links.map((palabra, index) => (
        <Button
          key={index}
          component={Link}
          to={`/${palabra.toLowerCase()}`}
          onClick={() => console.log(`Has hecho click en ${palabra}`)}
          sx={{ width: isSmallScreen ? '100%' : 'auto', marginBottom: isSmallScreen ? 2 : 0 }}
        >
          {palabra}
        </Button>
      ))}
    </Box>
  );
};

export default Header;
