import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../assets/css/MovieApp.css';
import { Link } from 'react-router-dom';
import SelectMovies from './SelectMovies';

const ElementDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);


  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  },  [fetchMovieDetails, id]);

  if (!movie) {
    return (
      <div className='spinners'>
      <div className='spinner'>
    <img src={process.env.PUBLIC_URL + '/spinner.gif'} alt='' className='spinner--img'/>
      </div>

      </div>
    )
  }
  const divStyle = {
    backgroundImage: `url(${movie.large_cover_image})`,
    backgroundSize: 'cover', // You can adjust this as needed
    backgroundPosition: 'center', // You can adjust this as needed
  };
  return (
    <>
      {/* <NavBar /> */}
      <div className='move' style={divStyle}>
     
        <div className='movie-id-list' >
      
            <div className='movie-ids'>
            <Link to={`/elementList`} className='movie_back'>
              Back to movie list<img src={process.env.PUBLIC_URL + '/arrow.svg'} alt='' className='back'/>
            </Link>
            <h3 className='movie-id-title'>{movie.title.length > 20 ? movie.title.substr(0, 10) : movie.title}</h3>
           <div className='id-details'>
           <div className='id-image'>
              <img src={movie.large_cover_image} className='id--image' alt='movie cover' /><br /><br />
            </div>
            <div className='movie-id-details'>
              
              <h3 className='id-text'>{movie.description_intro ? movie.description_intro : "oops.....No description available"}</h3>
              <p className='id-text'>Ratings: {movie.rating}</p>
              <p className='id-text'>Year: {movie.year}</p>
              <p className='id-text'>Genre: {movie.genres}</p><br />
              {/* <a href={movie.url} ojjclassName='download'>Downloads</a> */}


              {/* Display other movie details */}
            </div>
           </div>
            </div>
          </div>
      </div>

<div className='selectMovies'> 
<SelectMovies />
  </div>      
    </>
  );
};

export default ElementDetails;


