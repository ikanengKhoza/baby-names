import React, { useState } from "react";

const NameDisplay = (props) => {
  const [maleOrFemale, setMaleOrFemale] = useState("");

  function displayMorF() {
    setMaleOrFemale(maleOrFemale);
  }

  return (
    <div>
      {props.result
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((element) => {
          return (
            <button className="btn-background"
            style={{ backgroundColor: element.sex === "m" ? "#c40f51" : "none" }}
            
            key={element.id} >
              {element.name}
            
            </button>



          );
        })}
    </div>
  );
};

export default NameDisplay;
