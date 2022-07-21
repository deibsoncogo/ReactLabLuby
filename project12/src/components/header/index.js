import { useSelector, useDispatch } from 'react-redux'
import { AuthActions } from '../../store/auth'
import style from './style.module.css'

export const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => { return state.auth.isAuthenticated })

  const logoutHandler = () => { dispatch(AuthActions.logout()) }

  return (
    <header className={style.header}>
      <h1>Redux Auth</h1>

      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>

            <li>
              <a href='/'>My Sales</a>
            </li>

            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}

    </header>
  )
}
