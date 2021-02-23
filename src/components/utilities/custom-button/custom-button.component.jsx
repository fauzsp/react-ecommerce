import React from "react";
import {CustomButtonContainer} from "./custom-buttons.styles";

const CustomButton = ({
  children, ...Props
}) => {
  return (
    <CustomButtonContainer {...Props}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
