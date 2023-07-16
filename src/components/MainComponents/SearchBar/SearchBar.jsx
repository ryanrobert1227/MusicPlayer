import React from "react";

import "./style.css";

export default function SearchBar(props) {
  const { setSearch } = props;
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="Search" onChange={(e) => handleSearch(e)}>
      <input type="search" placeholder="Searching..." />
    </div>
  );
}
