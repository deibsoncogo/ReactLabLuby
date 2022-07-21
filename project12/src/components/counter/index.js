import { useSelector, useDispatch } from 'react-redux'
import { CounterActions } from '../../store/counter'
import style from './style.module.css'

export const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => { return state.counter.counter })
  const show = useSelector((state) => { return state.counter.showCounter })

  const incrementHandler = () => { dispatch(CounterActions.increment()) }
  const increaseHandler = () => { dispatch(CounterActions.increase(10)) }
  const decrementHandler = () => { dispatch(CounterActions.decrement()) }
  const toggleCounterHandler = () => { dispatch(CounterActions.toggleCounter()) }

  return (
    <main className={style.counter}>
      <h1>Redux Counter</h1>

      {show && <div className={style.value}>{counter}</div>}

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}
