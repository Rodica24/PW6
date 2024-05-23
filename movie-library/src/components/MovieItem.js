import React from 'react';
import { FaHeart, FaRegHeart, FaTrash } from 'react-icons/fa';
import '../styles/main.css';

const MovieItem = ({ movie, toggleLike, removeMovie }) => {
  return (
    <li>
      <img src={movie.imageUrl} alt={movie.title} />
      <div>
        <span>{movie.title} ({movie.genre})</span>
        <div>
          <button onClick={toggleLike} className="like-button">
            {movie.liked ? <FaHeart color="red" /> : <FaRegHeart />}
          </button>
          <button onClick={removeMovie}>
            <FaTrash />
          </button>
        </div>
      </div>
    </li>
  );
};

export default MovieItem;