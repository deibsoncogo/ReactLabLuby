import { useSelector } from 'react-redux'
import style from './style.module.css'

export const Counter = () => {
  const counter = useSelector((state) => { return state.counter })

  const toggleCounterHandler = () => { }

  return (
    <main className={style.counter}>
      <h1>Redux Counter</h1>

      <div className={style.value}>{counter}</div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}
