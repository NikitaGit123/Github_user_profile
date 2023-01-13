import React from "react";
import SortFunction from "./SortFunction";

function SearchBar({ imgs, onimgChange, getImage, data, onDataChange }) {
  return (
    <>
      <h2 style={{textAlign:"center",margin:"30px"}} className="name">Search Github User Profile</h2>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            value={imgs}
            onChange={(e) => {
              onimgChange(e.target.value);
            }}
          />
          <button type="submit" onClick={getImage} className="searchButton">
            Click on me
          </button>
        </div>
        <SortFunction data={data} onDataChange={onDataChange} />
      </div>
    </>
  );
}

export default SearchBar;
