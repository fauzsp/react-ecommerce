import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HeaderLogo } from "../../../assets/images/header-logo.svg";
import "./header.component.scss";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
