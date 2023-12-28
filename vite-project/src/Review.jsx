import React from 'react';
import { Link } from 'react-router-dom';
import Albums from './Albums';

const Review = ({ match }) => {
  // Assuming your album data is stored in a separate file, e.g., Albums.js
  const albumId = parseInt(match.params.id, 10); // Extract the album ID from the URL params
  const album = Albums.find((a) => a.id === albumId);

  if (!album) {
    return <div>Album not found</div>;
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