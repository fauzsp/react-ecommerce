import React from "react";
import "./checkout-item.component.scss";

const CheckOutItem = ({ item: { name, quantity, price, imageUrl } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <div className="price">{price}</div>
      <div className="remove button">&#10005</div>
    </div>
  );
};
export default CheckOutItem;
