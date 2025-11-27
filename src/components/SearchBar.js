import React, { useState } from "react";

function SearchBar(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const city = value.trim();
    if (!city) return;

    props.onSearch(city);   // send city up to App
    setValue("");
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter the city you want..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Search City Weather</button>
    </form>
  );
}

export default SearchBar;
