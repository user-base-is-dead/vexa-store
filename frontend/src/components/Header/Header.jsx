import { Search } from "../search/search";
import { Cart } from "../cart/cart";
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
            <Search />
            <Cart />
            
          </div>

        </div>

      </div>
    </header>

  )
}
