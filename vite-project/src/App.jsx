import React, { useState, useEffect } from 'react';
import './App.scss';
import Albums from './Albums.jsx';
import { Link } from 'react-router-dom';

const App = () => {
  
  const Album = ({ album }) => {
    const { id, title, artist, rating, image, year } = album;

    const getProgressBarColor = () => {
      if (rating < 40) {
        return '#E64747';
      } else if (rating >= 40 && rating <= 69) {
        return '#E6E22D';
      } else {
        return '#8fb935';
      }
    };

    return (
      <div style={{ padding: "10px", margin: "10px" }}>
        <Link to={`/review/${id}`}>
          <img className="album-image" src={image} alt={title} />
          <h2 className="album-title">{title}</h2>
        </Link>
        <p className="album-artist">{artist}</p>
        <p className="album-rating">{rating}</p>
        <div className='progress-container-app'>
        <div
          className='progress-bar-app'
          style={{
            width: `${rating}%`,
            height: '20px',
            backgroundColor: rating < 40 ? '#E64747' : rating <= 69 ? '#E6E22D' : '#8fb935',
          }}
        ></div>
      </div>
      </div>
    );
  };

  

  return (
    <>
      <div>
        <h1 className= 'website-title'>My Album Reviews</h1>
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

