import React from 'react'
import "../App.css";
import "bootstrap";
import "react-bootstrap";
import data from "../data-objects/data";

const SalesProducts = () => {
    return data.map((product) => {
        const { identity, name, image, price } = product;
        return (
          <div className="display-sales" key={identity}>
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
}

export default SalesProducts
