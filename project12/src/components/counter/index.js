import { useDispatch, useSelector } from 'react-redux'
import style from './style.module.css'

export const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => { return state.counter })

  const toggleCounterHandler = () => { }

  const incrementHandler = () => { return dispatch({ type: 'increment' }) }
  const decrementHandler = () => { return dispatch({ type: 'decrement' }) }

  return (
    <main className={style.counter}>
      <h1>Redux Counter</h1>

      <div className={style.value}>{counter}</div>

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}
