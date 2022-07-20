import style from './style.module.css'

export const Counter = () => {
  const toggleCounterHandler = () => { }

  return (
    <main className={style.counter}>
      <h1>Redux Counter</h1>

      <div className={style.value}>-- COUNTER VALUE --</div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}
