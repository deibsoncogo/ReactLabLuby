import { MealItemForm } from '../mealItemForm'
import style from './style.module.css'

export const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`

  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{price}</div>
      </div>

      <div>
        <MealItemForm />
      </div>
    </li>
  )
}
