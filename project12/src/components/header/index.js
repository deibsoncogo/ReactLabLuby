import { useDispatch, useSelector } from 'react-redux'
import { authenticationActions } from '../../store'
import style from './style.module.css'

export const Header = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => { return state.authentication.isAuthenticated })

  const logoutHandler = () => { return dispatch(authenticationActions.logout()) }

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
