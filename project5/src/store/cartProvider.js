import { useReducer } from 'react'
import { CartContext } from './cartContext'

const defaultCartState = { items: [], totalAmount: 0 }
const cartReducer = (state, action) => {
  if (action.type === 'add') {
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

    return { items: updatedItems, totalAmount: updatedTotalAmount }
  }

  return defaultCartState
}

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'add', item })
  }

  const removeItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'remove', item })
  }

  const CartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  }

  return (
    <CartContext.Provider value={CartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
