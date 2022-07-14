import { useReducer } from 'react'
import { CartContext } from './cartContext'

const defaultCartState = { items: [], totalAmount: 0 }

const cartReducer = (state, action) => {
  if (action.type === 'add') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex]

    let updatedItems

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }


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

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
