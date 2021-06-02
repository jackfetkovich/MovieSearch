const MovieSnapshot = ({ movie, id, Route, Link, Switch }) => {
  if (movie && !movie.Error) {
    return (
      <div className="snapshot">
        <div className="info">
          <h2 className="movie-title" ><Link to={`/search/${id}`} className='link'>{movie.Title}</Link></h2>
          <div className="supporting-info">
            <h3 className="year">{movie.Year}</h3>
            <h3>|</h3>
            <h3 className='media-type'>{movie.Type.toUpperCase()}</h3>
          </div>
        </div>

        <div className="photo">
          <img src={movie.Poster} alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="snapshot">
        <h2>No Results</h2>
      </div>
    );
  }
};

export default MovieSnapshot;
