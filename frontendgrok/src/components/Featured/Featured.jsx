import './Featured.css'
import React from 'react'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 7h-9M14 17H5" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
      </svg>
    ),
    title: 'Free Shipping',
    text: 'On all orders above ₹2,999',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Secure Payment',
    text: '100% protected transactions',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.79 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    ),
    title: 'Easy Returns',
    text: '7-day hassle-free returns',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: '24/7 Support',
    text: 'We are here to help anytime',
  },
]

export const Featured = () => {
  return (
    <section className="featured">
      <div className="container featured__grid">
        {features.map((feature) => (
          <div key={feature.title} className="featured__item">
            <div className="featured__icon">{feature.icon}</div>
            <h3 className="featured__title">{feature.title}</h3>
            <p className="featured__text">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}