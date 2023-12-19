import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const LikeButton = () => {
  const [isLiked, setLiked] = useState(false);

  const handleLikeClick = () => {
    // Cambiar el estado de 'like'
    setLiked(!isLiked);
  };

  return (
    <div className="div-comentario">
        <a onClick={handleLikeClick}>
            <FontAwesomeIcon icon={faHeart} style={{ color: isLiked ? 'red' : 'black' }} />
        {isLiked ? ' Unlike' : ' Like'}
        </a>
    </div>
  );
};

export default LikeButton;