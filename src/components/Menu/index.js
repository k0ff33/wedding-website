import React from 'react'
import Scrollspy from 'react-scrollspy'

import './index.scss'

const menuItems = [
  {
    name: 'Home',
    href: 'top'
  },
  {
    name: 'Schedule',
    href: 'schedule'
  },
  {
    name: 'Q&A',
    href: 'qa'
  }
]

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: 0
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    return (
      <nav className="navbar is-fixed-top custom">
        <div className="navbar-brand">
          <a className="navbar-item" href="#top">
            <img src="/img/bk_small.png" alt="Bogusia & Kamil Logo" />
          </a>

          <span
            className={
              this.state.isActive ? 'navbar-burger burger is-active' : 'navbar-burger burger'
            }
            data-target="navbar"
            onClick={this.onClick}
          >
            <span />
            <span />
            <span />
          </span>
        </div>

        <div id="navbar" className={this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            {/* <Scrollspy items={menuItems.map(e => e.name)} currentClassName="is-active"> */}
            {menuItems.map(item => (
              <a className="navbar-item" href={`#${item.href}`} onClick={this.onClick}>
                {item.name}
              </a>
            ))}
            {/* </Scrollspy> */}
          </div>
        </div>
      </nav>
    )
  }
}

{
  /* <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="https://bulma.io/">
        Home
      </a>
      </div>
    </div>

    
  </div>
</nav> */
}
