import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes desde la biblioteca prop-types
import { useRef } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  useMediaQuery,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';

const Comment = ({ onCommentAdd }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log('Imagen seleccionada:', file);
  };

  const handleAddPhotoClick = () => {
    fileInputRef.current.click();
  };
  const fileInputRef = useRef(null);
  const handleSendComment = () => {
    if (commentText.trim() !== '') {
      const newComment = {
        text: commentText,
      };
      setComments([...comments, newComment]);
      setCommentText('');
      onCommentAdd([...comments, newComment]);
    }
  };

  return (
    <Paper
      sx={{
        width: '80%',
        maxWidth: '884px',
        height: '70px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px',
        bgcolor: '#f5f5f5',
        borderRadius: '8px',
        margin: 'auto',
      }}
    >
      <Avatar sx={{ width: 40, height: 40, mr: 2 }} alt="User Avatar" src="../../assets/perfil1.png" />
      <TextField
        fullWidth
        placeholder={isSmallScreen ? 'Escribir algo' : 'Agregar un comentario...'}
        variant="outlined"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleAddPhotoClick}>
                <PhotoCameraIcon />
              </IconButton>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
              />
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton color="#0B6350" aria-label="Enviar comentario" onClick={handleSendComment}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};


Comment.propTypes = {
  onCommentAdd: PropTypes.func.isRequired,
};

export default Comment;
