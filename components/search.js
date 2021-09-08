import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const enterClick = (event) => {
    if (event.keyCode === 13) {
      handleSearch(event.target.value);
    }
  };

  return (
    <>
      <div className="search-color">
        <label className="input-label">Search Color</label>
        <span className="hashtag">#</span>
        <input
          type="text"
          className="search-input"
          maxLength="6"
          value={search}
          onChange={handleChange}
          onKeyUp={enterClick}
        />
        <i
          className="search fas fa-search"
          onClick={() => handleSearch(search)}
        ></i>
      </div>
    </>
  );
};

export default Search;
