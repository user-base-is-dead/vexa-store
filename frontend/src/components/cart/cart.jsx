import './Cart.css'

export const Cart = () => {
  return (
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
  )
}
