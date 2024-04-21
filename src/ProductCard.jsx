import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div
      style={{ width: "400px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <img src={image} alt="" style={{ height: "300px" }} />
      <h3>{name}</h3>
      <h4>{price}</h4>
    </div>
  );
};

export default ProductCard;
