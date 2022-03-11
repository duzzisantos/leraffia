import React from "react";
import "../App.css";
import corporateData from "../data-objects/corporate-data";

const Careers = () => {
  return corporateData.map((career) => {
    const { careerID, careers } = career;
    return (
      <div className="reusable-div" key={careerID}>
        <img src={careers.careerImage} alt="careers"></img>
        <h4 key={careerID}>{careers.careerText}</h4>
        <span><a href="/careers">See more</a></span>
      </div>
    );
  });
};

export default Careers;
