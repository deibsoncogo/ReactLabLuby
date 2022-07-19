import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../store/cartContext'
import { CartIcon } from '../../cart/cartIcon'
import style from './style.module.css'

export const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${style.button} ${btnIsHighlighted ? style.bump : ''}`

  useEffect(() => {
    if (items.length === 0) { return }
    setBtnIsHighlighted(true)
    const timer = setTimeout(() => { setBtnIsHighlighted(false) }, 300)
    return () => { clearTimeout(timer) }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={style.icon}><CartIcon /></span>

      <span>Your Cart</span>

      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  )
}
