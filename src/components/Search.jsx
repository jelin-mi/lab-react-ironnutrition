import React from 'react';

function Search({ onFilter }) {
  const handleSearch = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search your meal..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;