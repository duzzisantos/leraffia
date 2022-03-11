import "../App.css";
import "bootstrap";
import "react-bootstrap";
import data from "../data-objects/data";
import React from "react"

const OfferProducts = () => {
  return data.map((product) => {
    const { identity, name, image, price } = product;
    return (
      <div className="display-offer" key={identity}>
        <img src={image} alt="images"></img>
        <div className="product-info">
          <span>{name}</span>
          <br></br>
          <span>{price}</span>
          <br></br>
          <button className="buy-btn">Buy</button>
        </div>
      </div>
    );
  });
};

export default OfferProducts;
