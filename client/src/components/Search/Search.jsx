import React from 'react';
import { Link, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="#" style={{ color: '#0B6350', flex: 1 }}>
          Inicio
        </Link>
        <TextField
          placeholder="Buscar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          style={{ flex: 1 }}
        />
      </div>
    </div>
  );
}

export default Search;
