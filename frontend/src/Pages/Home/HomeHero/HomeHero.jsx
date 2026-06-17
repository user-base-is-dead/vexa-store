import './HomeHero.css'

export const HomeHero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Premium Access
            <br />
            <em>for Every Budget</em>
          </h1>

          <p className="hero-text">
            Your favorite subscriptions, shared smarter and priced lower.
          </p>

          <div className="hero-action">
            <a href="/shop" className="shop-button">SHOP NOW</a>
            <a href="/categories" className="categories-button">EXPLORE</a>
          </div>

        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">500+</span>
            <span className="hero-stat-label">PRODUCTS</span>
          </div>

          <div className="hero-stat">
            <span className="hero-stat-num">10k+</span>
            <span className="hero-stat-label">HAPPY CUSTOMERS</span>
          </div>

          <div className="hero-stat">
            <span className="hero-stat-num">4.9</span>
            <span className="hero-stat-label">AVERAGE RATING</span>
          </div>
        </div>
      </div>
    </section>
  )
}
