import React from "react";
import "../App.css";
import communityData from "../data-objects/community-data";
const Contact = () => {
  return communityData.map((branchContact) => {
    const { branchID, contact } = branchContact;
    return (
      <div className="reusable-div" key={branchID}>
        <img src={contact.photo} alt="images" key={branchID}></img>
        <section className="contact-wrapper" key={branchID}>
        <h4 key={branchID}>{contact.location}</h4>
        <span key={branchID}>{contact.phone}</span><br/>
        <span key={branchID}>{contact.email}</span><br/>
        <span key={branchID}>{contact.address}</span><br/>
        </section>
      </div>
    );
  });
};

export default Contact;
