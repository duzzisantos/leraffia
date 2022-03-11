import React from "react";
import "../App.css";
import "bootstrap";
import "react-bootstrap";
import corporateData from "../data-objects/corporate-data";

const CorporateDivs = () => {
  return corporateData.map((corporate) => {
    const { corporateID, name, image } = corporate;
    return (
      <div className="reusable-div" key={corporateID}>
        <img src={image} alt="images" key={corporateID}></img>
        <h4 key={corporateID}>{name}</h4>
      </div>
    );
  });
};

export default CorporateDivs;