import { useContext } from 'react'
import { CartContext } from '../../store/cartContext'
import { Modal } from '../ui/modal'
import { CartItem } from './cartItem'
import style from './style.module.css'

export const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item)
  }

  const cartItems = (
    <ul className={style['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={style.actions}>
        <button className={style['button--alt']} onClick={props.onClose}>
          Close
        </button>

        {hasItems && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  )
}
