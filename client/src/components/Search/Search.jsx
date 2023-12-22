
import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function SearchBar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button
        component={Link}
        to="/"
        color="inherit"
        variant="text"
        sx={{
          marginRight: 1,
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
        }}
      >
        Inicio
      </Button>
      <TextField
        placeholder="Buscar"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          width: { xs: '70%', sm: '90%', md: '70%', lg: '70%', xl: '70%' },
          marginLeft: { xs: 1, sm: 1, md: 3, lg: 4, xl: 4 },
        }}
      />
    </div>
  );
}

export default SearchBar;
