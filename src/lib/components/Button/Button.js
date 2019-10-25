const React = require('react')

// import '../style-placeholder.css'

const Button = ({ info }) => {
  const { onClick, disabled, iconSpriteStyleLine, className, text, key } = info
  return (
    <button
      type="button"
      className={`top-navbar-button ${className}`}
      onClick={onClick}
      disabled={disabled}
      key={key}
    >
      <div
        style={{ background: iconSpriteStyleLine }}
        className="top-navbar-button-sprite"
      />
      <div className="top-navbar-button-text">{text}</div>
    </button>
  )
}

module.exports = Button
