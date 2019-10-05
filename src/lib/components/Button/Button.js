import React from 'react'
import './styles.css'

const Button = ({ onClick, disabled, className, text }) => (
  <button
    type="button"
    className={`button-test ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
)

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  className: null,
  text: 'Click Me',
}

export default Button
