import React from 'react'
import InlineStyle from '../style'

const Button = ({ onClick, disabled, className, text }) => (
  <>
    <button
      type="button"
      className={`button-test ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
    <InlineStyle />
  </>
)

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  className: null,
  text: 'Click Me',
}

export default Button
