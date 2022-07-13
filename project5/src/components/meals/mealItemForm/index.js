import { Input } from '../../ui/input'
import style from './style.module.css'

export const MealItemForm = (props) => {
  return (
    <form className={style.form}>
      <Input label='Amount' input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <button>+ Add</button>
    </form>
  )
}