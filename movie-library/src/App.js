import React, { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import './styles/main.css';
import './styles/light.css';
import './styles/dark.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filter, setFilter] = useState('');

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const toggleLike = (index) => {
    const newMovies = movies.map((movie, i) =>
      i === index ? { ...movie, liked: !movie.liked } : movie
    );
    setMovies(newMovies);
  };

  const removeMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };
  

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };
  

  const filteredMovies = filter
    ? movies.filter((movie) =>
        movie.genre.toLowerCase().includes(filter)
      )
    : movies;

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <header>
        <h1>Movie Library</h1>
        <input
          type="text"
          placeholder="Filter by genre"
          onChange={handleFilterChange}
        />
        <button onClick={toggleTheme}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <main>
        <MovieForm addMovie={addMovie} />
        <MovieList
          movies={filteredMovies}
          toggleLike={toggleLike}
          removeMovie={removeMovie}
        />
      </main>
    </div>
  );
};

export default App;