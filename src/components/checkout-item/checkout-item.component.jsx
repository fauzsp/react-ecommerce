import React from "react";
import { connect } from "react-redux";
import closeIcon from "../../assets/images/icon-close.png";
import {
  removeButton,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions.js";
import "./checkout-item.component.scss";

const CheckOutItem = ({ cartItem, addItem, removeButton, removeItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div onClick={() => removeItem(cartItem)} className="arrow">
          &#10094;
        </div>
        {quantity}
        <div onClick={() => addItem(cartItem)} className="arrow">
          &#10095;
        </div>
      </div>
      <div className="price">{price}</div>
      <div onClick={() => removeButton(cartItem)} className="remove-button">
        <img src={closeIcon} alt="close" />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeButton: (item) => dispatch(removeButton(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
