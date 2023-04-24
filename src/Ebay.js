import React from "react";
import "./App.css";

function Ebay({ name, price, img, link }) {
  return (
    <div className="ebay-container">
      <h1>{name}</h1>
      <p>{price}</p>
      <img src={img} alt="" />
      <a href={link} target="_blank" rel="noopener noreferrer">
        View on eBay
      </a>
    </div>
  );
}

export default Ebay;
