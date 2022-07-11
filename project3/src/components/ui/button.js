import React from 'react'
import style from './button.module.css'

export const Button = (props) => {
    return (
      <button
        className={style.button}
        type={props.type || 'button'}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    )
}
