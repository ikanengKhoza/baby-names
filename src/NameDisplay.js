import React, { useState } from "react";
import NameData from "./babyNamesData.json";

//put everything in here, filter after sort
const NameDisplay = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {NameData.sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter((nameObject) => {
          const { name } = nameObject;
          if (name.toLowerCase().includes(searchInput.toLowerCase())) {
            return true;
          }
          return false;
        })
        .map((element) => {
          return (
            <button
              className="btn-background"
              style={{
                backgroundColor: element.sex === "m" ? "#c40f51" : "none",
              }}
              key={element.id}
            >
              {element.name}
            </button>

           
          );
        })}
    </div>
  );
};

export default NameDisplay;
