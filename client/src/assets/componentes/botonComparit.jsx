import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';

const RetweetButton = () => {
  const [isRetweeted, setRetweeted] = useState(false);

  const handleRetweetClick = () => {
    // Cambiar el estado de 'retweet'
    setRetweeted(!isRetweeted);
  };

  return (
    <div className="div-comentario">
        <a onClick={handleRetweetClick}>
            <FontAwesomeIcon icon={faRetweet} style={{ color: isRetweeted ? 'green' : 'black' }} />
        {isRetweeted ? ' Deshacer' : ' Compartir'}
        </a>
    </div>
  );
};

export default RetweetButton;