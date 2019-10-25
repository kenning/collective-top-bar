import React from 'react'
import Button from '../Button/Button'

import '../style-placeholder.css'

const MOBILE_WIDTH = 800

class TopBar extends React.Component {
  state = {
    selected: -1,
  }

  render() {
    const { icons } = this.props
    const { selected } = this.state
    const setSelected = (x) => {
      this.setState({ selected: x })
    }
    const onClickFactory = (idx) => (evt) => {
      debugger
      if (MOBILE_WIDTH < window.innerWidth) {
        window.location = icons[idx].url
      } else {
        selected === -1 ? setSelected(idx) : setSelected(-1)
      }
    }

    const propFactory = (idx) => {
      return {
        ...icons[idx],
        key: idx,
        onClick: onClickFactory(idx),
      }
    }

    return (
      <div className="top-navbar-wrapper">
        <div className="top-navbar-buttons">
          {icons.map((x, idx) => (
            <Button info={propFactory(idx)} />
          ))}
        </div>
        {selected >= 0 ? (
          <div className="top-navbar-mobile-preview">
            <div className="text">{icons[selected].text}</div>
            <button
              onClick={() => {
                window.location = icons[selected].url
              }}
            >
              GO
            </button>
          </div>
        ) : null}
      </div>
    )
  }
}

TopBar.defaultProps = {
  icons: [
    {
      iconSpriteStyleLine:
        'url(http://localhost:3000/library/blog/assets/blog1/dilbert.png) 107px 71px',
      disabled: false,
      className: null,
      text: 'Front Page',
      url: '/',
    },
    {
      iconSpriteStyleLine:
        'url(http://localhost:3000/library/blog/assets/blog1/dilbert.png) 107px 71px',
      disabled: false,
      className: null,
      text: 'Library',
      url: '/library/docs/welcome',
    },
    {
      iconSpriteStyleLine:
        'url(http://localhost:3000/library/blog/assets/blog1/dilbert.png) 107px 71px',
      disabled: false,
      className: null,
      text: 'Blog',
      url: '/library/blog/',
    },
    {
      iconSpriteStyleLine:
        'url(http://localhost:3000/library/blog/assets/blog1/dilbert.png) 107px 71px',
      disabled: false,
      className: null,
      text: 'Links',
      url: '/library/links/',
    },
  ],
}

export default TopBar
