import React from "react";
import { ReactComponent as ShopppingIcon } from "../../../assets/images/shopping-bag.svg";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../../redux/cart/cart.selectors.js";
import { ToggleCartHidden } from "../../../redux/cart/cart.actions.js";
import "./cart-icon.component.scss";

const CartIcon = ({ ToggleCartHidden, itemQuantity }) => {
  return (
    <div className="cart-icon">
      <ShopppingIcon onClick={ToggleCartHidden} className="shopping-icon" />
      <span className="item-count">{itemQuantity}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("its here");
  return {
    itemQuantity: selectCartItemsCount(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
