import React from 'react'
import style from './style.module.css'

export const Navigation = (props) => {
  return (
    <nav className={style.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
}
