import React from 'react';
import { Link } from 'react-router-dom';
import Albums from './Albums';

const Review = ({ match }) => {
  
  const albumId = parseInt(match.params.id, 10); 
  console.log(albumId);
  const album = Albums.find((a) => a.id === albumId);

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div>
      <h1>{album.title}</h1>
      <p>Artist: {album.artist}</p>
      <p>Rating: {album.rating}/100</p>
      <Link to="/App.jsx">Back to Albums</Link>
    </div>
  );
};

export default Review;