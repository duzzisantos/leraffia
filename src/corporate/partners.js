import React from "react";
import "../App.css";
import corporateData from "../data-objects/corporate-data";
const Partners = () => {
  return corporateData.map((partner) => {
    const { partnerID, partners } = partner;
    return (
      <div className="reusable-div" key={partnerID}>
        <img src={partners.partnerImage} alt="partner"></img>
        <h4 key={partnerID}>{partners.partnerText}</h4>
        <span><a href="/partners">See more</a></span>
      </div>
    );
  });
};

export default Partners;
