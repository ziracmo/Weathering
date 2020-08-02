import React from 'react'
import './header.scss'

export default function Header() {
    return (
    <header className="App-header">
        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              Weathering
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
    </header>
    )
}