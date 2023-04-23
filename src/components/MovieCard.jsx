import React from "react";
import "../assets/css/moviesGrid.css";

const MovieCard = ({ movie }) => {
  const { title, poster_path } = movie;
  const imageUrl = "https://image.tmdb.org/t/p/w300" + poster_path;

  return (
    <>
      <li className="listado-movie">
        <img src={imageUrl} alt={title} />
        <div>
          <p>{title}</p>
        </div>
      </li>
    </>
  );
};

export default MovieCard;
