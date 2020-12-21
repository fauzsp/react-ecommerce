import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HeaderLogo } from "../../../assets/images/header-logo.svg";
import { auth } from "../../../firebase/firebase.utils.js";
import "./header.component.scss";

const Header = ({ currentUser, showHeader, handleClick }) => {
  return (
    <div className="header">
      <Link className="logo-container" to={"/"}>
        <HeaderLogo className="logo" />
      </Link>
      <div className="options">
        <Link to={"/shop"} className="option">
          SHOP
        </Link>
        <Link to={"/cart"} className="option">
          CART
        </Link>
        {showHeader ? (
          <div>
            {currentUser ? (
              <div onClick={handleClick} className="option">
                SIGN OUT
              </div>
            ) : (
              <Link to={"/signin"} className="option">
                SIGN IN
              </Link>
            )}
          </div>
        ) : null}
        {/* {currentUser ? (
          <div onClick={() => auth.signOut()} className="option">
            SIGN OUT
          </div>
        ) : (
          <Link to={"/signin"} className="option">
            SIGN IN
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Header;
