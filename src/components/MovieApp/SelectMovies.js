import axios from 'axios';
import './MovieApp.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const SelectMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://yts.mx/api/v2/list_movies.json');
      const data = response.data.data.movies;
      setMovies(data.slice(0, 10)); // Displaying 20 data initially
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className='movie_app'>


      <div className='movieApp_search'>
        
        {/* <div className='movie_nav'>
          <nav>
            <div className='nav_1'>
              <p className='nav_2'>MOVIE APPi</p>
            </div>
            <div className='nav_3'>
              <input className='nav_4' type="text" value={searchQuery} onChange={handleChange} />
              <button className='nav_5' onClick={handleSearch}>Search</button>
            </div>
          </nav>
        </div> */}

      </div>
      <div className='select_details'>

        {movies.map((movie) => (
          // <div key={movie.id} className=''>
          //   {/* <h3 className='movie_title'>{movie.title.length > 20 ? movie.title.substr(0, 10) : movie.title}</h3> */}
          //   <div className='movie-img'>
          //   <img src={movie.large_cover_image} className='movie_image' alt='movie cover'/>
          //   </div>
          //   <Link to={`/details/${movie.id}`} className='movie_detail'>View Details</Link>
          // </div>
       <div className='movie-card'>
        <h3 className='movie_title'>{movie.title.length > 20 ? movie.title.substr(0, 10) : movie.title}</h3>
           <div className='movie-img'>
           <img src={movie.large_cover_image} className='movie--img' alt='movie cover'/>
          </div>
          <Link to={`/details/${movie.id}`} className='movie_link'>View Details</Link>
        </div>
          
        ))}
      </div>
    </div>
  );
};

export default SelectMovies;
