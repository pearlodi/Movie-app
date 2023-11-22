import axios from 'axios';
import './MovieApp.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
const HorrorsList = () => {
  const [movies, setMovies] = useState([]);
  const selectedGenre = useState('horror')[0];


 
  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://yts.mx/api/v2/list_movies.json', {
        params: {
          genre: selectedGenre,
        },
      });
      const data = response.data.data.movies;
      setMovies(data.slice(0, 10)); // Displaying the first 10 movies of the selected genre
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchMovies();
  },);
  

  return (
    <div className='movie_app'>

<p className='movie-genre'>FANTASY</p>
<div className='line'></div>
<div className='select_details'>

{movies.map((movie) => (

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

export default HorrorsList;
