import React from 'react';
import './App.scss';
import Albums from './Albums';
import Review from './Review';

const Album = ({ album }) => {
  const { title, artist, rating, image } = album;

  return (
    <div style={{padding: "10px", margin: "10px" }}>
      <img className="album-image" src={image} alt={title}/>
      <h2 className="album-title">{title}</h2>
      <p className="album-artist">{artist}</p>
      <p className="album-rating">{rating}</p>
      <progress value={rating} max="100"></progress>
    </div>
  );
};

function App() {
  return (
    <>
      {/* title */}
      <div>
        <h1>My Album Reviews</h1>
      </div>
      {/* album lists */}
      <div className="album-grid">
        {Albums.map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </>
  );
}

export default App;

