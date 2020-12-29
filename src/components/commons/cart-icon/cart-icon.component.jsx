import React from "react";
import { ReactComponent as ShopppingIcon } from "../../../assets/images/shopping-bag.svg";
import { connect } from "react-redux";
import ToggleCartHidden from "../../../redux/cart/cart.actions.js";
import "./cart-icon.component.scss";

const CartIcon = ({ ToggleCartHidden }) => {
  return (
    <div className="cart-icon">
      <ShopppingIcon onClick={ToggleCartHidden} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden),
});
export default connect(null, mapDispatchToProps)(CartIcon);
