import './About.css'

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__image">
          <img
            src="/hero-bg.svg"
            alt="Our store"
          />
        </div>

        <div className="about__content">
          <span className="about__tag">Our Story</span>
          <h2 className="section-title">
            Where Style Meets
            <br />
            <em>Substance</em>
          </h2>
          <p className="about__text">
            VÉRA was born from a simple belief — everyone deserves access to
            beautifully crafted products without compromising on quality. We
            curate each piece with care, partnering with artisans and brands
            that share our commitment to excellence.
          </p>
          <p className="about__text">
            From fashion to home essentials, every item in our collection is
            chosen to elevate your everyday. We believe in slow fashion,
            sustainable practices, and creating a shopping experience that feels
            as good as the products themselves.
          </p>

          <div className="about__highlights">
            <div className="about__highlight">
              <span className="about__highlight-num">2020</span>
              <span className="about__highlight-label">Founded</span>
            </div>
            <div className="about__highlight">
              <span className="about__highlight-num">50+</span>
              <span className="about__highlight-label">Brands</span>
            </div>
            <div className="about__highlight">
              <span className="about__highlight-num">100%</span>
              <span className="about__highlight-label">Authentic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}