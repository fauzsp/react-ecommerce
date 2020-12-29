import React from "react";
import CustomButton from "../../utilities/custom-button/custom-button.component";
import "./cart-dropdown.component.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>Go To CheckOut</CustomButton>
      </div>
    </div>
  );
};

export default CartDropDown;
