import React from "react";
import "./custom-button.component.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
