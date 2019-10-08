import React, { useState } from 'react'
import Button from '../Button/Button'

// import InlineStyle from '../../style'
// import './style-placeholder.css'

const MOBILE_WIDTH = 800

function TopBar({ icons }) {
  const [selected, setSelected] = useState(-1)
  const onClickFactory = (idx) => (evt) => {
    if (MOBILE_WIDTH < window.innerWidth) {
      alert('going to ' + icons[idx].url)
    } else {
      setSelected(idx)
    }
  }

  const propFactory = (idx) => {
    return {
      ...icons[idx],
      onClick: onClickFactory(idx),
    }
  }

  return (
    <div className="top-navbar-wrapper">
      <div className="top-navbar-buttons">
        <Button info={propFactory(0)} />
        <Button info={propFactory(1)} />
        <Button info={propFactory(0)} />
        <Button info={propFactory(1)} />
        {/* <InlineStyle /> */}
      </div>
      {selected >= 0 ? (
        <div className="top-navbar-mobile-preview">
          <div className="text">{icons[selected].text}</div>
          <button>GO</button>
        </div>
      ) : null}
    </div>
  )
}

TopBar.defaultProps = {
  icons: [
    {
      iconSpriteStyleLine:
        'url(http://localhost:3000/library/blog/assets/blog1/dilbert.png) 107px 71px',
      onClick: () => {},
      disabled: false,
      className: null,
      text: 'Front Page',
      url: '/',
    },
    {
      iconSpriteStyleLine:
        'url(http://localhost:3000/library/blog/assets/blog1/dilbert.png) 0px 50px',
      onClick: () => {},
      disabled: false,
      className: null,
      text: 'News',
      url: '/news/',
    },
  ],
}

export default TopBar
