import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = useCallback((product, size = 'M', quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.size === size
      )
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, size, quantity }]
    })
    setIsOpen(true)
  }, [])

  const removeFromCart = useCallback((id, size) => {
    setItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    )
  }, [])

  const updateQuantity = useCallback((id, size, quantity) => {
    if (quantity < 1) return
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}