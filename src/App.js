import React, { useState } from 'react';
import Nav from './Components/Nav';
import SearchForm from './Components/SearchForm';
import MovieSnapshot from './Components/MovieSnapshot';
import MoviePage from './Pages/MoviePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const submitQuery = () => {
    fetch(`https://www.omdbapi.com/?apikey=e22112b8&s=${query}`)
      .then(res => res.json())
      .then(data => setResults(data.Search));
  };

  return (
    <div className="app">
      <Router>

      <Route exact path="/search">
          <Redirect to="/search"></Redirect>
        </Route>
        <Route exact path="/">
          <Redirect to="/search"></Redirect>
        </Route>
        <Route path="/">
          <Nav Link={Link} />
        </Route>

        <Route path="/search" exact>
          <SearchForm
            setQuery={setQuery}
            submitQuery={submitQuery}
            results={results}
          />
          {!results ? (
            <MovieSnapshot movie={undefined} />
          ) : (
            results.map(movie => (
              <MovieSnapshot
                movie={movie}
                id={movie.imdbID}
                key={movie.imdbID}
                Route={Route}
                Link={Link}
                Switch={Switch}
              />
            ))
          )}
        </Route>

        <Route path="/search/:id">
          <MoviePage />
        </Route>
          
        
      </Router>
    </div>
  );
};

export default App;
