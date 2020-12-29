import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HeaderLogo } from "../../../assets/images/header-logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { connect } from "react-redux";
import { auth } from "../../../firebase/firebase.utils.js";
import "./header.component.scss";

const Header = ({ currentUser, showHeader, hidden }) => {
  const handleClick = function () {
    if (currentUser !== null) {
      auth
        .signOut()
        .then(function () {
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error.message);
        });
    }
  };
  return (
    <div className="header">
      <Link className="logo-container" to={"/"}>
        <HeaderLogo className="logo" />
      </Link>
      <div className="options">
        <div className="sample"></div>
        <Link to={"/shop"} className="option">
          SHOP
        </Link>
        {showHeader ? (
          <div>
            {currentUser ? (
              <div onClick={handleClick} className="option">
                SIGN OUT
              </div>
            ) : null}
          </div>
        ) : (
          <Link to={"/signin"} className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};
const mapStateToProps = ({
  user: { currentUser, showHeader },
  cart: { hidden },
}) => {
  return {
    currentUser,
    showHeader,
    hidden,
  };
};

export default connect(mapStateToProps)(Header);
