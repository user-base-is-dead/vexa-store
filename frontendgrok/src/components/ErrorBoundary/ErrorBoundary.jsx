import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '3rem',
          textAlign: 'center',
          fontFamily: 'sans-serif',
          color: '#1a1a1a',
        }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Kuch galat ho gaya
          </h1>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>
            Site load nahi ho payi. Terminal mein <code>npm run dev</code> chalao,
            phir <a href="http://localhost:5173">http://localhost:5173</a> kholo.
          </p>
          <pre style={{
            background: '#f5f5f5',
            padding: '1rem',
            textAlign: 'left',
            overflow: 'auto',
            fontSize: '0.8rem',
          }}>
            {this.state.error?.message}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}