import { useContext } from 'react'
import { CartContext } from '../../../store/cartContext'
import { CartIcon } from '../../cart/cartIcon'
import style from './style.module.css'

export const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  )
}
