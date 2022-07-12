import React, { useContext } from 'react'
import { AuthContext } from '../../store/authContext'
import style from './style.module.css'

export const Navigation = () => {
  const ctx = useContext(AuthContext)

  return (
    <nav className={style.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
}
