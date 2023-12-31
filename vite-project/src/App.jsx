import React from 'react';
import './App.scss';
import Albums from './Albums.jsx';
import { Link } from 'react-router-dom';

const App = () => {
  
  const Album = ({ album }) => {
    const { id, title, artist, rating, image } = album;

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
        <div className='progress-container-app' >
            <div className='progress-app'>
              <div
                className='progress-bar-app'
                role='progressbar'
                style={{ width: `${rating}%`, backgroundColor: getProgressBarColor(),}}
                aria-valuenow={rating}
                aria-valuemin='0'
                aria-valuemax='100'>
              </div>            
            </div>
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

