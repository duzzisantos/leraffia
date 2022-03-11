import React from "react";
import "../App.css";
import communityData from "../data-objects/community-data";
const CustomerService = () => {
  return communityData.map((services) => {
    const { serviceID, service } = services;
    return (
      <div className="reusable-div" key={serviceID}>
        <img src={service.photo} alt="images" key={serviceID}></img>
        <h4 key={serviceID}>{service.title}</h4>
        <span><a href="/customer-service">See more</a></span>
      </div>
    );
  });
};

export default CustomerService;
