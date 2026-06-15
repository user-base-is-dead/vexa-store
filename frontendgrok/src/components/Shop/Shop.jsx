import { useState } from 'react'
import { products, categories } from '../../data/products'
import { ProductCard } from '../ProductCard/ProductCard'
import './Shop.css'

export const Shop = ({ onViewDetails }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filtered = products
    .filter((p) => activeCategory === 'all' || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0
    })

  return (
    <section className="shop" id="shop">
      <div className="container">
        <div className="shop__header">
          <div>
            <h2 className="section-title">Our Collection</h2>
            <p className="section-subtitle">
              Handpicked pieces for the discerning taste
            </p>
          </div>

          <select
            className="shop__sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div className="shop__filters" id="categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`shop__filter ${activeCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="shop__grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="shop__empty">No products found in this category.</p>
        )}
      </div>
    </section>
  )
}