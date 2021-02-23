import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as HeaderLogo } from "../../../assets/images/header-logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { auth } from "../../../firebase/firebase.utils.js";
import {
  selectCurrentUser,
  selectShowHeader,
  selecthidden,
} from "../../../redux/user/user.selectors.js";
import {OptionDiv, OptionLink, OptionsContainer, LogoContainer, HeaderContainer} from "./header.styles";

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
    <HeaderContainer>
      <LogoContainer to={"/"}>
        <HeaderLogo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to={"/shop"}>
          SHOP
        </OptionLink>
        {showHeader ? (
          <div>
            {currentUser ? (
              <OptionDiv onClick={handleClick}>
                SIGN OUT
              </OptionDiv>
            ) : null}
          </div>
        ) : (
          <OptionLink to={"/signin"}>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showHeader: selectShowHeader,
  hidden: selecthidden,
});

export default connect(mapStateToProps)(Header);
