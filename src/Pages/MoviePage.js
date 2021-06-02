import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import React from 'react';

const MoviePage = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovieInfo = () => {
    console.log(id);
    window.scrollTo(0, 0);
    fetch(`https://www.omdbapi.com/?apikey=e22112b8&i=${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  };

  useEffect(getMovieInfo, [id]);

  return (
    <div className="movie-page">
      <h1 className="movie-title">
        {movie.Title ? movie.Title : 'LOADING...'}
      </h1>

      <div className="movie-info">
        <div className="basic-info">
          <h2 className="bolded-title">{movie.Year}</h2>
          <h2>|</h2>
          <h2 className="bolded-title">{movie.Rated}</h2>
          <h2>|</h2>
          <h2 className="bolded-title">{movie.Runtime}</h2>
        </div>
        <div className="extended-info">
          <h3><span className='info-title'>Genre: </span>{movie.Genre}</h3>
          <h3><span className='info-title'>Director: </span>{movie.Director}</h3>
          <h3><span className='info-title'>Writer: </span>{movie.Writer}</h3>
          <h3><span className='info-title'>Cast: </span>{movie.Actors}</h3>
        </div>
        <div className='plot-container'>
          <h3 className='plot-heading'>Plot</h3>
          <p className='plot'>{movie.Plot}</p>
        </div>
        
      </div>

      <div className="photo">
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
      </div>

      <div className="rating-container">
        <h4>Rating</h4>
        <div className="bar-outside">
          <div className="bar-inside" style={{width: `${parseFloat(movie.imdbRating) * 10}%`}}>{parseFloat(movie.imdbRating) * 10}%</div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
