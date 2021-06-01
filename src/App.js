import React, {useState } from 'react';
import Nav from './Components/Nav'
import SearchForm from './Components/SearchForm';
import MovieSnapshot from './Components/MovieSnapshot';


const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');

  const submitQuery = () => {
    console.log(query);
    fetch(`https://www.omdbapi.com/?apikey=e22112b8&t=${query}`).then(res =>
      res.json()
    ).then(data => setResults(data));
  };

  return (
    <div className='app'> 
      <Nav />
      <SearchForm
        setQuery={setQuery}
        submitQuery={submitQuery}
        results={results}
      />
      <MovieSnapshot movie={results} />
    </div>
  );
};

export default App;
