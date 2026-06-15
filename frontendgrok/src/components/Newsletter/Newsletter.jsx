import { useState } from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="newsletter">
      <div className="container newsletter__inner">
        <h2 className="newsletter__title">Join the VÉRA Circle</h2>
        <p className="newsletter__text">
          Be the first to know about new arrivals, exclusive offers, and style
          inspiration.
        </p>

        {submitted ? (
          <p className="newsletter__success">
            Thank you for subscribing! Welcome to VÉRA.
          </p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter__input"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}