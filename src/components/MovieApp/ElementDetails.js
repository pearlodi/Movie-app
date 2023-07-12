import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MovieApp.css'
import NavBar from './NavBar';

const ElementDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);


  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
      const data = response.data.data.movie;
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovieDetails();
  }, );

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className='move'>

        <div className='list'>
          <div className='lists'>
            <div className='listss'>
              <img src={movie.large_cover_image} className='movie_image' alt='movie cover' /><br /><br />
            </div>
            <div>
              <h3 className='movie_title'>{movie.title.length > 20 ? movie.title.substr(0, 10) : movie.title}</h3>
              <h3 className='movie_title'>{movie.description_full.length > 700 ? movie.description_full.substr(0, 650) : movie.description_full}</h3>
              <p className='movie_title'>Ratings: {movie.rating}</p>
              <p className='movie_title'>Year: {movie.year}</p><br />
              <a href={movie.url} className='download'>Downloads</a>


              {/* Display other movie details */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElementDetails;
