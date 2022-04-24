import React, { useState } from "react";
import NameData from "./babyNamesData.json";

//put everything in here, filter after sort

const BabyName = ({ nameProp, handleClick }) => {
  const { id, name, sex } = nameProp;
  return (
   
    <button onClick={() => handleClick(nameProp)}
      className="btn-background"
      style={{
        backgroundColor: sex === "m" ? "#c40f51" : "none",
      }}
    >
      {name}
    </button>
    
  );
};

const NameDisplay = () => {
  const [searchInput, setSearchInput] = useState("");
  const [favourites, setFavourites] = useState([]);

  const handleNameClick = (nameObject) => {
    setFavourites([...favourites, nameObject]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div>
          {favourites.map((fav) => (
            <BabyName nameProp={fav} />
          ))}{" "}
          Click Any Name To Add Favourites
        </div>
        <hr />

        {NameData.sort((a, b) => (a.name > b.name ? 1 : -1))
          .filter((nameObject) => {
            const { name } = nameObject;
            if (name.toLowerCase().includes(searchInput.toLowerCase())) {
              return true;
            }
            return false;
          })
          .map((nameObject) => (
            <BabyName nameProp={nameObject} handleClick={handleNameClick} />
          ))}
      </div>
    </div>
  );
};

export default NameDisplay;
