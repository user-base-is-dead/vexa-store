import { useState } from 'react'
import { formatPrice } from '../../data/products'
import { useCart } from '../../context/CartContext'
import './ProductDetail.css'

export const ProductDetail = ({ product, onClose }) => {
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] ?? 'M')
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  const handleAdd = () => {
    addToCart(product, selectedSize, quantity)
    onClose()
  }

  return (
    <>
      <div className="product-detail__overlay" onClick={onClose} />
      <div className="product-detail" role="dialog" aria-label={product.name}>
        <button className="product-detail__close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="product-detail__image">
          <img src={product.image} alt={product.name} />
          {product.badge && (
            <span className={`product-detail__badge product-detail__badge--${product.badge.toLowerCase()}`}>
              {product.badge}
            </span>
          )}
        </div>

        <div className="product-detail__info">
          <span className="product-detail__category">{product.category}</span>
          <h2 className="product-detail__name">{product.name}</h2>

          <div className="product-detail__pricing">
            <span className="product-detail__price">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="product-detail__original">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="product-detail__desc">{product.description}</p>

          <div className="product-detail__sizes">
            <span className="product-detail__label">Size</span>
            <div className="product-detail__size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`product-detail__size ${selectedSize === size ? 'is-active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-detail__quantity">
            <span className="product-detail__label">Quantity</span>
            <div className="product-detail__qty-controls">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                −
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button className="btn btn-primary product-detail__add" onClick={handleAdd}>
            Add to Bag — {formatPrice(product.price * quantity)}
          </button>
        </div>
      </div>
    </>
  )
}