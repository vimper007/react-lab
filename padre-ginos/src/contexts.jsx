import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const cartHook = useState([])
    return (
        <CartContext.Provider value={cartHook}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error('useCart must be used in CartProvider')
    return context
}