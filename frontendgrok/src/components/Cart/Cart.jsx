import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../data/products'
import './Cart.css'

export const Cart = () => {
  const {
    items,
    isOpen,
    setIsOpen,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart,
  } = useCart()

  const handleCheckout = () => {
    const message = items
      .map((item) => `${item.name} (${item.size}) x${item.quantity} - ${formatPrice(item.price * item.quantity)}`)
      .join('%0A')
    const total = formatPrice(totalPrice)
    window.open(
      `https://wa.me/919876543210?text=Hi! I want to order:%0A%0A${message}%0A%0ATotal: ${total}`,
      '_blank'
    )
  }

  if (!isOpen) return null

  return (
    <>
      <div className="cart__overlay" onClick={() => setIsOpen(false)} />
      <aside className="cart" role="dialog" aria-label="Shopping cart">
        <div className="cart__header">
          <h2 className="cart__title">Your Bag</h2>
          <button
            className="cart__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart__empty">
            <p>Your bag is empty</p>
            <button className="btn btn-primary" onClick={() => setIsOpen(false)}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="cart__items">
              {items.map((item) => (
                <li key={`${item.id}-${item.size}`} className="cart__item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart__item-image"
                  />
                  <div className="cart__item-details">
                    <h3 className="cart__item-name">{item.name}</h3>
                    <span className="cart__item-size">Size: {item.size}</span>
                    <span className="cart__item-price">
                      {formatPrice(item.price)}
                    </span>
                    <div className="cart__item-actions">
                      <div className="cart__qty">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.size, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="cart__remove"
                        onClick={() => removeFromCart(item.id, item.size)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart__footer">
              <div className="cart__total">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <p className="cart__note">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn btn-primary cart__checkout" onClick={handleCheckout}>
                Checkout via WhatsApp
              </button>
              <button className="cart__clear" onClick={clearCart}>
                Clear bag
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}