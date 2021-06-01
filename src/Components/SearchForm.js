import { useRef } from 'react';

const SearchForm = ({ setQuery, submitQuery, results }) => {
  const searchBox = useRef(null);
  const searchButton = useRef(null);
  const editQuery = () => {
    setQuery(searchBox.current.value);
  };

  return (
    <div className="searchbar">
      <input type="text" onChange={editQuery} ref={searchBox} placeholder='Movie or TV Show Title'/>
      <button
        onClick={() => {
          submitQuery();
        }}
        ref={searchButton}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
