import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/_pagination.sass'
import '../../styles/_SearchBar.sass';
import Cross from '../../assets/images/cross.png'

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);  
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="search">
      <input
        type="text"
        name="searchBar"
        placeholder="Search"
        value={query}
        onChange={handleSearchChange}
      />
      <img
        src={Cross}
        alt="Clear search"
        className="clear-icon"
        onClick={clearSearch}
      />
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;