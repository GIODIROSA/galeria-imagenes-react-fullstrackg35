import React from "react";
import movies from "../movies.json";
import MovieCard from "./MovieCard";
import "../assets/css/moviesGrid.css"

const MoviesGrid = () => {
  return (
    <>
      <ul className="contenedor-cards-movie">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default MoviesGrid;
