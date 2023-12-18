import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = () => {
  const palabras = ['Publicaciones', 'Etiquetas', 'Noticias'];

  return (
    <div>
      {palabras.map((palabra, index) => (
        <Button
          key={index}
          component={Link}
          to={`/${palabra}`}
          onClick={() => console.log(`Has hecho click en ${palabra}`)}
        >
          {palabra}
        </Button>
      ))}
    </div>
  );
};

export default Header;
