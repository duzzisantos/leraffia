import React from "react";
import Filters from "../reusable-comps/filters";
import OfferProducts from "./offers-products";
import "../App.css";

const Offers = () => {
  return (
    <div>
      <Filters />
      <div className="products">
        <OfferProducts />
      </div>
    </div>
  );
};

export default Offers;
