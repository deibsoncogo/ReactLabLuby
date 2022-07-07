import React from 'react'
import { Card } from '../ui/Card'
import { ExpenseDate } from './ExpenseDate'
import './ExpenseItem.css'

export const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />

        <div className='expense-item-description'>
          <h2>{props.title}</h2>

          <div className='expense-item-price'>$ {props.amount}</div>
        </div>
      </Card>
    </li>
  )
}
