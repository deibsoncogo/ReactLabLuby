import { CartIcon } from '../../cart/cartIcon'
import style from './style.module.css'

export const HeaderCartButton = (props) => {
  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={style.badge}>3</span>
    </button>
  )
}
