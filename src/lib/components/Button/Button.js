import React from 'react'

// import InlineStyle from '../../style'
import '../style-placeholder.css'

const Button = ({ info }) => {
  const { onClick, disabled, iconSpriteStyleLine, className, text } = info
  return (
    <>
      <button
        type="button"
        className={`top-navbar-button ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        <div
          style={{ background: iconSpriteStyleLine }}
          className="top-navbar-button-sprite"
        />
        <div className="top-navbar-button-text">{text}</div>
      </button>
      {/* <InlineStyle /> */}
    </>
  )
}

export default Button
