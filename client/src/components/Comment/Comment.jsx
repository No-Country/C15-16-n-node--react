import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, Paper, Typography, Avatar } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const Comment = () => {
  const [comment, setComment] = useState('');
  const [image, setImage] = useState(null);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleCommentSubmit = () => {
    // Aquí puedes manejar la lógica para enviar el comentario y la imagen
    console.log('Comentario:', comment);
    console.log('Imagen:', image);
    // Luego, puedes restablecer el estado si es necesario
    setComment('');
    setImage(null);
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'flex-start' }}>
      {/* Foto del perfil */}
      <Avatar
        alt="Perfil"
        src="URL_DE_TU_IMAGEN_DE_PERFIL" // Reemplaza con la URL de tu imagen de perfil
        sx={{ width: 48, height: 48, mr: 2 }}
      />

      {/* Caja de comentarios */}
      <Box sx={{ flexGrow: 1 }}>
        <TextField
          multiline
          fullWidth
          rows={4}
          variant="outlined"
          label="Comentar..."
          value={comment}
          onChange={handleCommentChange}
          sx={{ mb: 2 }}
        />

        {/* Sección de carga de imágenes */}
        <Box display="flex" alignItems="center">
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCameraIcon />
            </IconButton>
          </label>
          <Typography variant="body2" sx={{ ml: 1, flexGrow: 1 }}>
            {image ? image.name : 'Adjuntar imagen'}
          </Typography>

          {/* Botón de envío de comentario */}
          <Button variant="contained" color="primary" onClick={handleCommentSubmit}>
            Publicar
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Comment;
