import React from "react";
import "../App.css";
import corporateData from "../data-objects/corporate-data";
const Investors = () => {
  return corporateData.map((invest) => {
    const { investorID, investors } = invest;
    return (
      <div className="reusable-div" key={investorID}>
        <img src={investors.investorImage} alt="investors"></img>
        <h4 key={investorID}>{investors.investorText}</h4>
        <span><a href="/investors">See more</a></span>
      </div>
    );
  });
};

export default Investors;
