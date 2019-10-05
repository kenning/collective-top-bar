import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Button = ({ onClick, disabled, className, text }) => (
  <button
    type="button"
    className={`button ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  className: null,
  text: "Click Me"
};

export default Button;
