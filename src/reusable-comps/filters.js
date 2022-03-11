import React from "react";
import "../App.css";
import "bootstrap";
import "react-bootstrap";

const Filters = () => {
  return (
    <div className="offers">
      <div className="side-menu-wrapper">
        <h5>Filter</h5>
        <hr></hr>
        <details>
          <summary>By Color</summary>
          <input type="search" id="color" placeholder="Enter color"></input>
        </details>
        <hr></hr>
        <details>
          <summary>By Season</summary>
          <input type="search" id="season" placeholder="Enter season"></input>
        </details>
        <hr></hr>
        <details>
          <summary>By Occassion</summary>
          <input
            type="search"
            id="occassion"
            placeholder="Enter occassion"
          ></input>
        </details>
        <hr></hr>
        <details>
          <summary>By Country of Origin</summary>
          <input type="search" id="origin" placeholder="Enter origin"></input>
        </details>
      </div>
    </div>
  );
};

export default Filters;
