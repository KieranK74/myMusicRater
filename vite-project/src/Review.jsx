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
          <p className='rating'>{album.rating}</p>
          <progress className='review-progress' value={album.rating} max="100"></progress>
        </div>
      </div>
  
      <div className='review-section'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar sapien at purus dictum, vitae vestibulum ante vehicula. Nullam cursus ligula tellus. Ut malesuada scelerisque libero, a dignissim justo venenatis sit amet. Morbi orci lorem, sodales eu orci ac, dictum accumsan felis. Curabitur ut massa in turpis tristique pellentesque sagittis quis nisi. Maecenas suscipit eleifend augue, quis porta erat finibus ac. Aliquam condimentum nunc lacus, in convallis ante egestas quis. Etiam vel enim non felis egestas condimentum. Maecenas volutpat, dui ut gravida rhoncus, neque urna auctor orci, ut eleifend massa magna vel eros. Fusce vehicula nec nisi id accumsan. Fusce interdum tempor rutrum. Integer eu ullamcorper dolor, venenatis viverra neque. Quisque nulla dui, suscipit quis placerat in, elementum ut nulla. Suspendisse orci augue, euismod non mattis id, porttitor ac leo. Proin ullamcorper, lacus vel hendrerit ultrices, lorem sem luctus lacus, non porta orci nisi a massa.

          <br></br><br></br>Fusce in erat purus. Quisque purus ipsum, accumsan non euismod ac, aliquet non lacus. Vivamus feugiat euismod semper. Nulla nulla metus, congue non mi non, vulputate lacinia turpis. Nulla facilisi. Curabitur magna ante, luctus vitae porttitor eget, laoreet vitae neque. Vivamus lobortis, nibh quis malesuada interdum, lacus quam rhoncus massa, quis ornare justo quam ac nisi. Quisque elit sapien, ullamcorper sit amet lobortis vitae, congue et sapien. Nam lorem lectus, sagittis et lectus nec, rhoncus venenatis nulla. Etiam vitae lacinia augue. Pellentesque sed cursus orci. In eleifend odio mi. Sed nec elit id est euismod ultricies. Etiam nec mi purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
      </div>
      
      
    </div>
  );
};

export default Review;
