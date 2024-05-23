import React, { useState, useEffect } from 'react';
import './styles/main.css';
import './styles/light.css';
import './styles/dark.css';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favoriteTitles, setFavoriteTitles] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [genreFilter, setGenreFilter] = useState('');

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('movies'));
    if (savedMovies) {
      setMovies(savedMovies);
      const favoriteTitles = savedMovies.filter(movie => movie.liked).map(movie => movie.title);
      setFavoriteTitles(favoriteTitles);
    } else {
      setMovies([]);
    }

    const savedFavoriteTitles = JSON.parse(localStorage.getItem('favoriteTitles'));
    if (savedFavoriteTitles) {
      setFavoriteTitles(savedFavoriteTitles);
    } else {
      setFavoriteTitles([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteTitles', JSON.stringify(favoriteTitles));
  }, [favoriteTitles]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const toggleLike = (index) => {
    const newMovies = [...movies];
    newMovies[index].liked = !newMovies[index].liked;
    setMovies(newMovies);
    const favoriteTitles = newMovies.filter(movie => movie.liked).map(movie => movie.title);
    setFavoriteTitles(favoriteTitles);
  };

  const removeMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
    const favoriteTitles = newMovies.filter(movie => movie.liked).map(movie => movie.title);
    setFavoriteTitles(favoriteTitles);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  };

  const filterMoviesByGenre = (genre) => {
    return movies.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()));
  };

  return (
    <div>
      <header>
        <h1>Movie Keeper</h1>
        <button onClick={toggleDarkMode} className="dark-mode-button">
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </header>
      <main className={darkMode ? 'dark' : 'light'}>
        <input
          type="text"
          placeholder="Filter by Genre"
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
        />
        <MovieForm addMovie={addMovie} />
        <MovieList 
          movies={genreFilter ? filterMoviesByGenre(genreFilter) : movies} 
          toggleLike={toggleLike} 
          removeMovie={removeMovie} 
        />
        <h2>Favorite Movies</h2>
        <ul>
          {favoriteTitles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
