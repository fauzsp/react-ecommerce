import React from "react";
import { ReactComponent as ShopppingIcon } from "../../../assets/images/shopping-bag.svg";
import { connect } from "react-redux";
import {
  ToggleCartHidden,
  cartItems,
} from "../../../redux/cart/cart.actions.js";
import "./cart-icon.component.scss";

const CartIcon = ({ ToggleCartHidden, cartItems }) => {
  return (
    <div className="cart-icon">
      <ShopppingIcon onClick={ToggleCartHidden} className="shopping-icon" />
      <span className="item-count">
        {cartItems.map((cartItem, key) => cartItem.quantity)}
      </span>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
