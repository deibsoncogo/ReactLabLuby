import React, { useState } from 'react'
import { Card } from '../ui/Card'
import { ExpenseDate } from './ExpenseDate'
import './ExpenseItem.css'

export const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Updated')
    console.log(title)
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />

      <div className='expense-item-description'>
        <h2>{props.title}</h2>

        <div className='expense-item-price'>$ {props.amount}</div>
      </div>

      <button onClick={clickHandler}>Change title</button>
    </Card>
  )
}
