import { useContext } from 'react'
import { CartContext } from '../../../store/cartContext'
import { MealItemForm } from '../mealItemForm'
import style from './style.module.css'

export const MealItem = (props) => {
  const cartCtx = useContext(CartContext)

  const price = `$${props.price.toFixed(2)}`

  const addToCartHandler = (amount) => {
    cartCtx.addItem({ id: props.id, name: props.name, amount: amount, price: props.price })
  }

  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{price}</div>
      </div>

      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}
