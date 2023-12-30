import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Albums from './Albums';
import './App.scss';

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
      <h1>{album.title}</h1>
      <p>Artist: {album.artist}</p>
      <p>Rating: {album.rating}/100</p>
      <Link to="/">Back to Albums</Link>
    </div>
  );
};

export default Review;
