import { useState } from 'react'
import { formatPrice } from '../../data/products'
import { useCart } from '../../context/CartContext'
import './ProductCard.css'

export const ProductCard = ({ product, onViewDetails }) => {
  const { addToCart } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  const handleAdd = (e) => {
    e.stopPropagation()
    addToCart(product, product.sizes[0])
  }

  return (
    <article
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onViewDetails(product)}
    >
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
        {product.badge && (
          <span className={`product-card__badge product-card__badge--${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}
        <button
          className={`product-card__quick-add ${isHovered ? 'is-visible' : ''}`}
          onClick={handleAdd}
        >
          Quick Add
        </button>
      </div>

      <div className="product-card__info">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__pricing">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="product-card__original">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}