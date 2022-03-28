import React from "react";
import ButtonUI from "@styles/ui/ButtonUI";

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <ButtonUI {...props}>{label}</ButtonUI>;
};

export default Button;
