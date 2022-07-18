import React from 'react'
import { Movie } from '../movie'
import style from './style.module.css'

export const MoviesList = (props) => {
  return (
    <ul className={style['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  )
}
