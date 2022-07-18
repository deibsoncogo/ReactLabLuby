import React from 'react'
import style from './style.module.css'

export const Movie = (props) => {
  return (
    <li className={style.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  )
}
