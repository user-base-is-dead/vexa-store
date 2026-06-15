import './Hero.css'

export const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img
          src="/hero-bg.svg"
          alt="Fashion collection"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container">
        <span className="hero__tag">Spring Collection 2026</span>
        <h1 className="hero__title">
          Curated Elegance
          <br />
          <em>for Every Moment</em>
        </h1>
        <p className="hero__text">
          Discover timeless pieces crafted with intention. Quality you can feel,
          style that speaks for itself.
        </p>
        <div className="hero__actions">
          <a href="#shop" className="btn btn-primary">
            Shop Now
          </a>
          <a href="#categories" className="btn btn-outline hero__btn-outline">
            Explore
          </a>
        </div>
      </div>

      <div className="hero__stats container">
        <div className="hero__stat">
          <span className="hero__stat-num">500+</span>
          <span className="hero__stat-label">Products</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">10k+</span>
          <span className="hero__stat-label">Happy Customers</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">4.9</span>
          <span className="hero__stat-label">Average Rating</span>
        </div>
      </div>
    </section>
  )
}