import React from "react";
import Filters from "../reusable-comps/filters";
import SalesProducts from "./sales-products";
import "../App.css";

const Sales = () => {
  return (
    <div>
      <Filters />
      <div className="products">
      <SalesProducts />
      </div>
    </div>
  );
};

export default Sales;
