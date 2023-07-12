import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieApp.css'
import { Link } from 'react-router-dom';

const ElementList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://yts.mx/api/v2/list_movies.json');
      const data = response.data.data.movies;
      setMovies(data.slice(0, 20)); // Displaying 20 data initially
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${searchQuery}`);
      const data = response.data.data.movies;
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='movie_app'>



      <div className='movieApp_search'>

        <div className='movie_nav'>
          <nav>
            <div className='nav_1'>
              <p className='nav_2'>MOVIE APP</p>
            </div>
            <div className='nav_3'>
              <input className='nav_4' type="text" value={searchQuery} onChange={handleChange} />
              <button className='nav_5' onClick={handleSearch}>Search</button>
            </div>
          </nav>
        </div>

      </div>
      <div className='movie_details'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3 className='movie_title'>{movie.title.length > 20 ? movie.title.substr(0, 10) : movie.title}</h3>
            <img src={movie.large_cover_image} className='movie_image' alt='movie cover'/><br /><br />
            <Link to={`/details/${movie.id}`} className='movie_detail'>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElementList;
