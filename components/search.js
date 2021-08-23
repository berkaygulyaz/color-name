import React, {useEffect, useState} from 'react';

const Search = ({handleSearch}) => {

  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value)

    console.log(search)
  }

  return (
    <>
      <div className="search-color">
        <label className="input-label">Search Color</label>
        <span className="hashtag">#</span>
        <input type="text" className="search-input" value={search} onChange={handleChange} />
        <i className="search fas fa-search" onClick={() => handleSearch(search)}></i>
        {/* <div className="berkay">{colorName}</div> */}
      </div>
    </>
  );
}

export default Search;