import React, { useMemo } from 'react'
import style from './style.module.css'

export const DemoList = React.memo((props) => {
  const { items } = props

  const sortedList = useMemo(() => {
    console.log('Items sorted')
    return items.sort((a, b) => a - b)
  }, [items])

  console.log('DemoList RUNNING')

  return (
    <div className={style.list}>
      <h2>{props.title}</h2>

      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
})
