import React, { useState } from "react";
import names from "./babyNamesData.json";

const Search = () => {
  const [searchInput, setSearchInput] = useState([]);

  function onChangeSearch(event) {
    setSearchInput(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={searchInput}
        onChange={onChangeSearch}

      /> 

      {names.map((eachSearch) =>
        eachSearch.name.filter((name) =>
          name.includes(searchInput.toLowerCase())
        )
      )}
    </div>
  );
};

export default Search;
