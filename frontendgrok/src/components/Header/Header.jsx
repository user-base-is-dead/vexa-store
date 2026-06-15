import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import './Header.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'Categories', href: '#categories' },
  { label: 'About', href: '#about' },
]

export const Header = () => {
  const { totalItems, setIsOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__announcement">
        Free shipping on orders above ₹2,999 · Use code WELCOME10
      </div>

      <div className="header__main container">
        <button
          className={`header__menu-btn ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>

        <a href="#home" className="header__logo">
          VÉRA
        </a>

        <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="header__actions">
          <button className="header__icon-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          <button
            className="header__icon-btn header__cart-btn"
            onClick={() => setIsOpen(true)}
            aria-label={`Cart, ${totalItems} items`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {totalItems > 0 && (
              <span className="header__cart-count">{totalItems}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}