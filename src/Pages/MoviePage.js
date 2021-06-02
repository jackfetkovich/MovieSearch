import {useState, useEffect} from 'react';
import { useParams } from "react-router";
import React from "react";

const MoviePage = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  
  const getMovieInfo = () => {
    console.log(id)
    fetch(`https://www.omdbapi.com/?apikey=e22112b8&i=${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }

  useEffect(getMovieInfo, []);
  
  return(
    <div className='movie-page'>
      <div className='movie-info'>
        <h1 className='movie-info'>{movie.Title ? movie.Title: 'LOADING...'}</h1>
      </div>
      
    </div>
    
  )
  
}

export default MoviePage;