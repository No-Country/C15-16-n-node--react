import React, { useState } from 'react';

const NuevaPublicacion = () => {
  const [mostrarOpciones, setMostrarOpciones] = useState(false);
  const [publicaciones, setPublicaciones] = useState([]);
  const [publicacion, setPublicacion] = useState({
    imagen: null,
    texto: '',
  });

  const handleTextoChange = (e) => {
    setPublicacion({
      ...publicacion,
      texto: e.target.value,
    });
  };

  const handleImagenChange = (e) => {
    setPublicacion({
      ...publicacion,
      imagen: e.target.files[0],
    });
  };

  const handleMostrarOpciones = () => {
    setMostrarOpciones(true);
  };

  const handlePublicarClick = () => {
    // Agregar la nueva publicación a la lista de publicaciones
    setPublicaciones([...publicaciones, publicacion]);

    // Limpiar el estado de la publicación actual
    setPublicacion({
      imagen: null,
      texto: '',
    });

    // Ocultar las opciones de publicación
    setMostrarOpciones(false);
  };

  return (
    <div>
      {/* Botón para mostrar las opciones de publicación */}
      {!mostrarOpciones && <button onClick={handleMostrarOpciones}>Publicación Nueva</button>}

      {/* Opciones de publicación */}
      {mostrarOpciones && (
        <div>
          <h2>Publicación nueva</h2>
          <label>
            Texto:
            <textarea value={publicacion.texto} onChange={handleTextoChange} />
          </label>
          <br />
          <label>
            Imagen:
            <input type="file" onChange={handleImagenChange} />
          </label>
          <br />
          <button onClick={handlePublicarClick}>Publicar</button>
          <br />
        </div>
      )}

      {/* Lista de publicaciones */}
      <div>
        <h3>Publicaciones</h3>
        {publicaciones.map((p, index) => (
          <div className='divPubli'>
            <div key={index} className="publicacion">
                <p>{p.texto}</p>
                {p.imagen && <img src={URL.createObjectURL(p.imagen)} alt="Publicación" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NuevaPublicacion;