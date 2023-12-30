import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Albums from './Albums';
import './Review.scss';

const Review = () => {
  // Ensure match is not undefined and has a 'params' property
  const { id } = useParams();
  const albumId = parseInt(id, 10);
  const album = Albums.find((a) => a.id === albumId);

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
      <div className='header'>
        <div className='review-image'>
          <img src={album.image} alt={album.title} />
        </div>
  
        <div className='review-details'>
          <h2 className='title'>{album.title}</h2>
          <h4 className='artist'>{album.artist}</h4>
          <p className='rating'>{album.rating}</p>
          <progress value={album.rating} max="100"></progress>
        </div>
      </div>
  
      <div className='review-section'>
        <p>Review blah blah blah</p>
      </div>
      
      <Link to="/">Back to Albums</Link>
    </div>
  );
};

export default Review;
