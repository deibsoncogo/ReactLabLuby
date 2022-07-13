import { Modal } from '../../ui/modal'
import style from './style.module.css'

export const Cart = (props) => {
  const cartItems = (
    <ul className={style['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal>
      {cartItems}

      <div className={style.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>

      <div className={style.actions}>
        <button className={style['button-alt']}>Close</button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  )
}
