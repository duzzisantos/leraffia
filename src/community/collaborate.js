import React from "react";
import "../App.css";
import communityData from "../data-objects/community-data";
const Collaborate = () => {
  return (
    communityData.map((collab) => {
      const {id, collaborate} = collab;
      return(
        <div className="reusable-div" key={id}>
          <img src={collaborate.photo} alt="images" key={id}></img>
          <h4 key={id}>{collaborate.title}</h4>
          <span><a href="/collaborate">See more</a></span>
          </div>
      )
    })
  );
};

export default Collaborate;
