import React, { useContext, useState } from 'react'
import { CartContext } from '../../../store/cartContext'
import { Modal } from '../../ui/modal'
import { CartItem } from '../cartItem'
import { Checkout } from '../checkout'
import style from './style.module.css'

export const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)

  const cartCtx = useContext(CartContext)

  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)

    await fetch('https://generaltestarea-default-rtdb.firebaseio.com/orders.json', {
      method: 'post',
      body: JSON.stringify({ user: userData, orderedItems: cartCtx.items })
    })

    setIsSubmitting(false)
    setDidSubmit(true)

    cartCtx.clearCart()
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

  const modalActions = (
    <div className={style.actions}>
      <button className={style['button-alt']} onClick={props.onClose}>
        Close
      </button>

      {hasItems && (
        <button onClick={orderHandler} className={style.button}>
          Order
        </button>
      )}
    </div>
  )

  const cartModalContent = (
    <React.Fragment>
      {cartItems}

      <div className={style.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>

      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}

      {!isCheckout && modalActions}
    </React.Fragment>
  )

  const isSubmittingModalContent = (<p>Sending order data...</p>)

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order</p>

      <div className={style.actions}>
        <button className={style['button-alt']} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  )

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
}
