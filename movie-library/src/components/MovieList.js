import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, toggleLike, removeMovie }) => {
  return (
    <ul>
      {movies.map((movie, index) => (
        <MovieItem
          key={index}
          movie={movie}
          toggleLike={() => toggleLike(index)}
          removeMovie={() => removeMovie(index)}
        />
      ))}
    </ul>
  );
};

export default MovieList;