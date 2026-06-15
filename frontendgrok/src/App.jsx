import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Featured } from './components/Featured/Featured'
import { Shop } from './components/Shop/Shop'
import { About } from './components/About/About'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Footer } from './components/Footer/Footer'
import { Cart } from './components/Cart/Cart'
import { ProductDetail } from './components/ProductDetail/ProductDetail'
import './App.css'

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <Featured />
        <Shop onViewDetails={setSelectedProduct} />
        <About />
        <Newsletter />
      </main>
      <Footer />
      <Cart />
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </CartProvider>
  )
}

export default App