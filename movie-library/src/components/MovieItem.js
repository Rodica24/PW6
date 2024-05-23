import React from 'react';
import { FaHeart, FaRegHeart, FaTrash } from 'react-icons/fa';

const MovieItem = ({ movie, toggleLike, removeMovie }) => {
  return (
    <li>
      <img src={movie.imageUrl} alt={movie.title} />
      <div>
        <span>{movie.title} ({movie.genre})</span>
        <button onClick={toggleLike}>
          {movie.liked ? <FaHeart /> : <FaRegHeart />}
        </button>
        <button onClick={removeMovie}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};


export default MovieItem;