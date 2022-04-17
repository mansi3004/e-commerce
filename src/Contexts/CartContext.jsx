import React, {createContext, useState} from 'react'

const CartContext = createContext();

const CartContextProvider = (props) => {

    const [CartItems, setCartItems] = useState([])
    const [Category, setCategory] = useState("All")
    const value = {CartItems, setCartItems, Category, setCategory}

  return (
    <CartContext.Provider value={value}>
        {props.children}
    </CartContext.Provider>
  )
}

export {CartContext, CartContextProvider}
