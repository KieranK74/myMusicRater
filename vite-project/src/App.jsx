import React from 'react';
import './App.scss';
import Albums from './Albums.jsx';
import { Link } from 'react-router-dom';

const App = () => {
  
  const Album = ({ album }) => {
    const { id, title, artist, rating, image } = album;

    return (
      <div style={{ padding: "10px", margin: "10px" }}>
        <Link to={`/review/${id}`}>
          <img className="album-image" src={image} alt={title} />
          <h2 className="album-title">{title}</h2>
        </Link>
        <p className="album-artist">{artist}</p>
        <p className="album-rating">{rating}</p>
        <progress value={rating} max="100"></progress>
      </div>
    );
  };

  return (
    <>
      <div>
        <h1>My Album Reviews</h1>
      </div>
      <div className="album-grid">
        {Albums.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </>
  );
};

export default App;

