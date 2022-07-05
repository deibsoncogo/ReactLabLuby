import React from 'react'
import { Card } from '../UI/Card'
import { ExpenseDate } from './ExpenseDate'
import './ExpenseItem.css'

export const ExpenseItem = (props) => {
  let title = props.title

  const clickHandler = () => {
    title = 'Updated'
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
