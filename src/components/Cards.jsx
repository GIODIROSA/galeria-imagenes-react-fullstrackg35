import React from "react";
import MoviesGrid from "./MoviesGrid";
import "../assets/css/moviesGrid.css"

const Cards = () => {
  return (
    <>
      <main className="contenedor-movies">
        <MoviesGrid />
      </main>
    </>
  );
};

export default Cards;
