import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">VÉRA</a>
          <p className="footer__tagline">
            Curated elegance for the modern lifestyle. Quality pieces, timeless style.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l11.5 16h4.5L8.5 4H4zm5 0 11.5 16" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__links">
          <h4>Shop</h4>
          <ul>
            <li><a href="#shop">All Products</a></li>
            <li><a href="#categories">Fashion</a></li>
            <li><a href="#categories">Accessories</a></li>
            <li><a href="#categories">Home & Living</a></li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Contact</h4>
          <ul>
            <li>hello@vera-shop.com</li>
            <li>+91 98765 43210</li>
            <li>Mumbai, India</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; 2026 VÉRA. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}