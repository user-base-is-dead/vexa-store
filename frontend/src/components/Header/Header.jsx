import React from 'react'
import './Header.css';
import { navLinks } from "../../utils/navLinks";
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
      <div className="header-box">

        <div className="header-announcement">
          <p className="announcement-text container">Free shipping on orders above $20,139. Use code WELCOM10</p>
        </div>

        <div className="header-main container">
          <NavLink href="/home" className="header-logo">VEXA</NavLink>
          <nav className={`header-nav`}>
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className="header-nav-link">{link.label}</NavLink>
            ))}
          </nav>

          <div className="search-cart">
            <div className="search-box">
              <svg
                className="search-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input type="text" placeholder="Search..." />
            </div>

            <button className="cart-btn" aria-label="Cart">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 3H5L7.2 14.2C7.4 15.2 8.2 16 9.3 16H18.5C19.5 16 20.3 15.3 20.6 14.4L22 8H6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="9" cy="21" r="1" fill="currentColor" />
                <circle cx="19" cy="21" r="1" fill="currentColor" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </header>

  )
}
