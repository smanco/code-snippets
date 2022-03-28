import React from "react";
import ButtonUI from "@styles/base/ButtonUI";

// eslint-disable-next-line react/prop-types
const Button: React.FC = ({ children }) => {
  return <ButtonUI>{children}</ButtonUI>;
};

export default Button;
