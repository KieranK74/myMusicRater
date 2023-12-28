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
      <p>{rating}/100</p>
      {/* <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 0%"></div>
      </div> */}
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

