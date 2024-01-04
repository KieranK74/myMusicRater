import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Albums from './Albums';
import './Review.scss';

const Review = () => {
  const { id } = useParams();
  const albumId = parseInt(id, 10);
  const album = Albums.find((a) => a.id === albumId);


  const [progress, setProgress] = useState(0);

  //animation for progress
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress >= album.rating) {
        clearInterval(interval);
      } else {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, 10);

    
    return () => {
      clearInterval(interval);
    };
  }, [progress, album.rating]);

  // red: 0-40
  // yellow: 41-69
  // green: 70-100
  const getProgressBarColor = () => {
    if (album.rating < 40) {
      return '#E64747';
    } else if (album.rating >= 40 && album.rating <= 69) {
      return '#E6E22D';
    } else {
      return '#8fb935';
    }
  };


  if (!album) {
    return (
    <div>
      <p>Album not found</p>
      <Link to="/App">Back to Albums</Link>
    </div>
    );
  }

  return (
    <div>

      <div className='link'>
        <Link to="/"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
          </svg>
          <p>Back to Albums</p>
        </Link>
      </div>


      <div className='header'>
        <div className='review-image'>
          <img src={album.image} alt={album.title} />
        </div>
  
        <div className='review-details'>
          <h2 className='title'>{album.title}</h2>
          <h4 className='artist'>{album.artist}</h4>
          <h6 className='year'>{album.year}</h6>
          <p className='rating'>{album.rating}</p>
          
          <div className='progress-container' >
            <div className='progress'>
            <div
              className='progress-bar'
              role='progressbar'
              style={{ width: `${progress}%`, backgroundColor: getProgressBarColor(),}}
              aria-valuenow={progress}
              aria-valuemin='0'
              aria-valuemax={album.rating}>
              </div>            
              </div>
          </div>
        </div>
      </div>
  
      <div className='review-section'>
        <p>{album.review}</p>
      </div>
      
      
    </div>
  );
};

export default Review;
