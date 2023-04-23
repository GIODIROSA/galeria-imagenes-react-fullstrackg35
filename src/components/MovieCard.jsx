import React, { useState } from "react";
import "../assets/css/moviesGrid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MovieCard = ({ movie, botonAlerta }) => {
  const { title, poster_path, overview } = movie;
  const imageUrl = "https://image.tmdb.org/t/p/w300" + poster_path;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <li className="listado-movie">
        <img
          width={230}
          height={345}
          className="pre-image-movie efecto-filter"
          src={imageUrl}
          alt={title}
        />
        <div className="contenedor-titulo-boton-card">
          <div className="contenedor-titulo-card">
            <p className="title-movie">{title}</p>
          </div>

          <Button variant="primary" onClick={handleShow}>
            sinopsis
          </Button>
        </div>

        {/* modal */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{overview}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </li>
    </>
  );
};

export default MovieCard;
