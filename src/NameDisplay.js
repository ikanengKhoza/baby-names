import React, { useState } from "react";
import NameData from "./babyNamesData.json";

//put everything in here, filter after sort

const BabyName = ({ nameProp, handleClick }) => {
  const { name, sex } = nameProp;
  return (
    <button
      onClick={() => handleClick(nameProp)}
      className="btn-background"
      style={{
        backgroundColor: sex === "m" ? "#F95700FF" : "none",
      }}
    >
      {name}
    </button>
  );
};

const NameDisplay = () => {
  const [searchInput, setSearchInput] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [filteredSex, setfilteredSex] = useState("all");

  const handleNameClick = (nameObject) => {
    setFavourites([...favourites, nameObject]);
  };

  const handleRemoveNameFavourite = (nameObject) => {
    setFavourites(favourites.filter((fav) => fav.id !== nameObject.id));
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
          <button
            onClick={() => setfilteredSex("all")}
            style={{
              backgroundColor: filteredSex === "all" ? "red" : "beige",
            }}
          >
            all
          </button>
          <button
            onClick={() => setfilteredSex("m")}
            style={{
              backgroundColor: filteredSex === "m" ? "#F95700FF" : "beige",
            }}
          >
           m
          </button>
          <button
            onClick={() => setfilteredSex("f")}
            style={{
              backgroundColor: filteredSex === "f" ? "rgb(35, 233, 150)" : "beige",
            }}
          >
           f
          </button>
        </div>

        <div>
          {favourites.map((fav) => (
            <BabyName nameProp={fav} handleClick={handleRemoveNameFavourite} />
          ))}
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
