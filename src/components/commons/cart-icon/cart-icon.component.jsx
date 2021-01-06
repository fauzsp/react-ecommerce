import React from "react";
import { ReactComponent as ShopppingIcon } from "../../../assets/images/shopping-bag.svg";
import { connect } from "react-redux";
import {
  ToggleCartHidden,
  cartItems,
} from "../../../redux/cart/cart.actions.js";
import "./cart-icon.component.scss";

const CartIcon = ({ ToggleCartHidden, cartItems }) => {
  function checkQauntity(quan) {
    let cartQuantity = 0;
    if (cartItems.length > 0) {
      console.log("exist");
      return (cartQuantity = quan.quantity);
    }
    return cartQuantity;
  }
  return (
    <div className="cart-icon">
      <ShopppingIcon onClick={ToggleCartHidden} className="shopping-icon" />
      <span className="item-count">
        {cartItems.map((cartItem, key) => {
          return <span key={key}>{checkQauntity(cartItem)}</span>;
        })}
        {checkQauntity(cartItems)}
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
