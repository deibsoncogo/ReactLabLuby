import { Component } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../../store'
import style from './style.module.css'

export const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => { return state.counter.value })
  const show = useSelector((state) => { return state.counter.showCounter })

  const incrementHandler = () => { return dispatch(counterActions.increment()) }
  const increaseHandler = () => { return dispatch(counterActions.increase(10)) }
  const decrementHandler = () => { return dispatch(counterActions.decrement()) }
  const toggleCounterHandler = () => { return dispatch(counterActions.toggleCounter()) }

  return (
    <main className={style.counter}>
      <h1>Redux Counter</h1>

      {show && (<div className={style.value}>{counter}</div>)}

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

// class Counter extends Component {
//   incrementHandler() { this.props.increment }
//   decrementHandler() { this.props.decrement }
//   toggleCounterHandler()

//   render() {
//     return (
//       <main className={style.counter}>
//         <h1>Redux Counter</h1>

//         <div className={style.value}>{this.props.counter}</div>

//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>

//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return { counter: state.counter }
// }

// const mapDispatchProps = (dispatch) => {
//   return {
//     increment: () => { return dispatch({ type: 'increment' }) },
//     decrement: () => { return dispatch({ type: 'decrement' }) },
//   }
// }

// export default connect(mapStateToProps, mapDispatchProps)(Counter)
