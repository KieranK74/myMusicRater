import React from 'react';
import './App.css';
import Albums from './Albums';

const Album = ({ album }) => {
  const { title, artist, rating, image } = album;

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={image} alt={title} style={{ maxWidth: "100%" }} />
      <h2 className="album-title">{title}</h2>
      <p>Artist: {artist}</p>
      <p>Rating: {rating}/100</p>
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

