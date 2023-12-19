import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

const Comment = ({ comment, onReply }) => {
  const [reply, setReply] = useState("");

  const handleReply = () => {
    onReply(reply);
    setReply("");
  };

  return (
    <div className="input-comentario">
      <p>{comment}</p>
      <input
        type="text"
        placeholder="Responder..."
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        className="input-perfil"
      />
      <button className="editar-perfil-btn" onClick={handleReply}>Responder</button>
    </div>
  );
};

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false); // Nuevo estado para controlar la visibilidad

  const handleComment = () => {
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleReply = (index, reply) => {
    const updatedComments = [...comments];
    updatedComments[index] = `${comments[index]}\n Respuesta: ${reply}`;
    setComments(updatedComments);
  };

  return (
    <div className="div-comentario">
      <a className="link-comentario" onClick={() => setShowComments(!showComments)}>
      <FontAwesomeIcon icon={faCommentAlt} />
      </a>
      {showComments && (
        <div>
          <div className="input-comentario">
            <input
              type="text"
              placeholder="Nuevo comentario..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="input-perfil"
            />
            <button className="editar-perfil-btn" onClick={handleComment}>Comentar</button>
          </div>
          {comments.map((comment, index) => (
            <Comment
              key={index}
              comment={comment}
              onReply={(reply) => handleReply(index, reply)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentList;