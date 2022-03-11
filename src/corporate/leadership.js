import React from "react";
import "../App.css";
import corporateData from "../data-objects/corporate-data";
const Leadership = () => {
  return corporateData.map((leader) => {
    const { leaderID, leadership } = leader;
    return (
      <div className="reusable-div" key={leaderID}>
        <img src={leadership.leaderImage} alt="leadership"></img>
        <h4 key={leaderID}>{leadership.leaderText}</h4>
        <div className="leader-wrapper" key={leaderID}>
          <span>{leadership.role}</span><br/>
          <span>{leadership.email}</span><br/>
          </div>
      </div>
    );
  });
};

export default Leadership;
