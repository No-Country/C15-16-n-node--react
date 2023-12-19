import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = () => {
  const links = ['Publicaciones', 'Etiquetas', 'Noticias'];

  return (
    <Box display="flex" justifyContent="space-around" alignItems="center" height="100%">
      {links.map((palabra, index) => (
        <Button
          key={index}
          component={Link}
          to={`/${palabra.toLowerCase()}`}
          onClick={() => console.log(`Has hecho click en ${palabra}`)}
          style={{ width: '100%' }} 
        >
          {palabra}
        </Button>
      ))}
    </Box>
  );
};

export default Header;
