import React from 'react'
import { Navigation } from '../navigation'
import style from './style.module.css'

export const MainHeader = (props) => {
  return (
    <header className={style['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  )
}
