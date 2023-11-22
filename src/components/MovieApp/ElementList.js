import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieApp.css';
import { Link } from 'react-router-dom';
// import LoadingAnimation from './LoadingAnimation';

const ElementList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const moviesPerPage = 1;

  useEffect(() => {
  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://yts.mx/api/v2/list_movies.json', 
      {
        params: {
          page: currentPage,
          query_term: searchQuery,
        },
      });
      const data = response.data.data.movies;
      console.log(data)
      setMovies(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

    fetchMovies();
  }, [currentPage, searchQuery]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(movies.length / moviesPerPage);
  const pageButtons = Array.from({ length: totalPages }, (_, index) => {
    if (
      index === 0 ||
      index === totalPages - 1 ||
      (index + 1 >= currentPage - 2 && index + 1 <= currentPage + 2)
    ) {
      return (
        <button
          key={index + 1}
          onClick={() => changePage(index + 1)}
          style={{
            padding: '5px 10px',
            margin: 'auto',
            border: '1px solid #000',
            background: currentPage === index + 1 ? '#0F1215' : 'transparent',
            color: currentPage === index + 1 ? '#fff' : '#000',
            cursor: 'pointer',
          }}
        >
          {index + 1}
        </button>
      );
    } else if (
      (index + 1 === currentPage - 3 && index !== 0) ||
      (index + 1 === currentPage + 3 && index !== totalPages - 1)
    ) {
      return <span key={index + 1}>...</span>;
    }
    return null;
  });
  const handleSearch = async () => {
    try {
      const response = await axios.get('https://yts.mx/api/v2/list_movies.json', {
        params: {
          query_term: searchQuery,
          page: 1, // Reset to the first page when searching
        },
      });
      const data = response.data.data.movies;
      setMovies(data);
      setCurrentPage(1); // Reset the current page to 1
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='movie_app'>
       <div>
     <Link to={`/`} className='index-back'>
              Back to movie list<img src={process.env.PUBLIC_URL + '/arrow.svg'} alt='' className='back'/>
            </Link>
  </div>
      {loading ? (
<div className='spinners'>
<div> <img src={process.env.PUBLIC_URL + '/spinner.gif'} alt='' className='spinner--img'/></div>
  </div>
) : (
 
        <div className='movie_details'>
          
        {movies.map((movie) => (
          <div key={movie.id} className='movie-card'>
            <h3 className='movie_title'>
              {movie.title.length > 20 ? movie.title.substr(0, 10) : movie.title}
            </h3>
            <p>{movie.genre}</p>
            <div className='movie-img'>
              <img src={movie.large_cover_image} className='movie--img' alt='movie cover' />
            </div>
         
            <Link to={`/details/${movie.id}`} className='movie_link'>View Details</Link>
          </div>
        ))}
      </div>
      )}
      <div className='movieApp_pagination' style={{ position: 'fixed', bottom: '0', left: '0', width: '100%' }}>
        <div>
          <div className='page'>
            <div className='pagination'>{pageButtons}</div>
            <div className='search'>
              <input className='search' type="text" value={searchQuery} onChange={handleChange} />
              <button className='search-btn' onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementList;
