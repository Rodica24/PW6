import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && genre) {
      addMovie({ title, genre, imageUrl, liked: false });
      setTitle('');
      setGenre('');
      setImageUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;