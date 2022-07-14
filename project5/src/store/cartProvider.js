import { CartContext } from "./cartContext"

export const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {}
  const removeItemToCartHandler = (item) => {}

  const CartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  }


  return (
    <CartContext.Provider value={CartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
