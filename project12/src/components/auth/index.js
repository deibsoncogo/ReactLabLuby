import { useDispatch } from 'react-redux'
import { authenticationActions } from '../../store'
import style from './style.module.css'

export const Auth = () => {
  const dispatch = useDispatch()

  const loginHandler = (event) => {
    event.preventDefault()
    dispatch(authenticationActions.login())
  }

  return (
    <main className={style.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={style.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>

          <div className={style.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>

          <button>Login</button>
        </form>
      </section>
    </main>
  )
}
