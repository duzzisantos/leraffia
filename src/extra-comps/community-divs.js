import React from "react";
import "../App.css";
import "bootstrap";
import "react-bootstrap";
import communityData from "../data-objects/community-data";

const CommunityDivs = () => {
  return communityData.map((community) => {
    const { communityID, name, image } = community;
    return (
      <div className="reusable-div" key={communityID}>
        <img src={image} alt="images" key={communityID}></img>
        <h4 key={communityID}>{name}</h4>
      </div>
    );
  });
};

export default CommunityDivs;
