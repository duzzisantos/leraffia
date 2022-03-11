import React from "react";
import "../App.css";
import "bootstrap";
import "react-bootstrap";
import data from "../data-objects/data";

const MyDivs = () => {
  return data.map((information) => {
    const { identify, name, image } = information;
    return (
      <div className="reusable-div" key={identify}>
        <img src={image} alt="images" key={identify}></img>
        <h4  key={identify}>
          {name}
        </h4>
      </div>
    );
  });
};

export default MyDivs;
