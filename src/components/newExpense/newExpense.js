import React from 'react'
import { ExpenseFrom } from './ExpenseForm'
import './newExpense.css'

export const NewExpense = () => {
  return (
    <div className='new-expense'>
      <ExpenseFrom />
    </div>
  )
}
