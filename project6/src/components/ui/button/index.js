import React from 'react'
import style from './style.module.css'

export const Button = React.memo((props) => {
  console.log('Button RUNNING')

  return (
    <button
      type={props.type || 'button'}
      className={`${style.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
})
