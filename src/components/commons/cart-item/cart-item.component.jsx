import React from "react";
import "./cart-item.component.scss";

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="name">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
