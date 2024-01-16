import React, { useState, useEffect } from 'react';
import './App.scss';
import Albums from './Albums.jsx';
import { Link } from 'react-router-dom';

const App = () => {
  const [fade, setFade] = useState(false);
  const [uniqueYears, setUniqueYears] = useState([]); //array of each unique year in the list
  const [selectedYear, setSelectedYear] = useState("none"); // Updated state to track the selected year
  
  useEffect(() => {
    // Set fade to true after the component mounts
    setFade(true);

    // Extract unique years from Albums and sort them in chronological order
    const years = [...new Set(Albums.map(album => album.year))].sort();
    setUniqueYears(years);
  }, []);
  
  const Album = ({ album }) => {
    const { id, title, artist, rating, image, year } = album;

    const getRatingColor = () => {
      if (rating < 40) {
        return '#E64747';
      } else if (rating >= 40 && rating <= 69) {
        return '#E6E22D';
      } else {
        return '#8fb935';
      }
    };

    return (
      <div style={{ padding: "10px", margin: "10px",  opacity: fade ? 1 : 0, transition: "opacity 1s ease-in-out"}}>
        <Link to={`/review/${id}`}>
          <div className='album-and-ribbon'> 
            <span className = "ribbon" data-rating={rating}></span>
            <img className="album-image" src={image} alt={title} />
          </div>
          <h2 className="album-title">{title}</h2>
        </Link>
        <p className="album-artist">{artist}</p>
      </div>
    );
  };

  const handleYearButtonClick = (year) => {
    setSelectedYear(year);
  };

  const filterAlbumsByYear = (album) => {
    return selectedYear === "none" || album.year === selectedYear;
  };

  

  return (
    <>
      <div>
        <h1 className= 'website-title'>My Album Reviews</h1>
      </div>
      <div className="button-row">
        <div className="btn-group btn-group-toggle"  data-toggle="buttons">
          {uniqueYears.map((year) => (
            <label class="btn btn-secondary">
              <input key={year}  type="radio" name="options" id={year}  autocomplete="off" className={`btn btn-outline-secondary year-button ${year === selectedYear ? 'selected' : ''}`} onClick={() => handleYearButtonClick(year)}/>
              {year}
            </label>
          ))}
            <label class="btn btn-secondary">
              <input type="radio" name="options" id="none"  autocomplete="off" className={`btn btn-outline-secondary year-button ${selectedYear === "none" ? 'selected' : ''}`} onClick={() => handleYearButtonClick("none")}/>
                See All
            </label>
        </div>
      </div>
      <div className="album-grid">
        {Albums.filter(filterAlbumsByYear).map((album) => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </>
  );
};

export default App;

