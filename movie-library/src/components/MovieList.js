import React from 'react';
import MovieItem from './MovieItem';
import '../styles/main.css';

const MovieList = ({ movies, toggleLike, removeMovie }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <MovieItem
          key={index}
          movie={movie}
          toggleLike={() => toggleLike(index)}
          removeMovie={() => removeMovie(index)}
        />
      ))}
    </div>
  );
};

export default MovieList;
