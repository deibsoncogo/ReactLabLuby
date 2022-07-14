import { useContext, useEffect, useState } from 'react'
import { CartIcon } from '../../cart/cartIcon'
import { CartContext } from '../../../store/cartContext'
import style from './style.module.css'

export const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${style.button} ${btnIsHighlighted ? style.bump : ''}`

  useEffect(() => {
    if (cartCtx.items.length === 0) { return }

    setBtnIsHighlighted(true)

    const timer = setTimeout(() => { setBtnIsHighlighted(false) }, 300)

    return () => { clearTimeout(timer) }
  }, [cartCtx])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={style.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  )
}
