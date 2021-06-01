const MovieSnapshot = ({ movie }) => {
  if (movie && !movie.Error) {
    return (
      <div className='snapshot'>
        <div className="info">
          <h2 className="movie-title">{movie.Title}</h2>
          <div className="stats">
            <h3 className="release-year">{movie.Year}</h3>
            <h3>|</h3>
            <h3 className="rating">{movie.Rated}</h3>
            <h3>|</h3>
            <h3 className="duration">{movie.Runtime}</h3>
          </div>
          <p className="plot">{movie.Plot}</p>
        </div>
        <div className="photo">
          <img src={movie.Poster} alt="" />
        </div>
      </div>
    );
  } else {
    return <div className='snapshot'><h2>No Results</h2></div>;
  }
};

export default MovieSnapshot;
