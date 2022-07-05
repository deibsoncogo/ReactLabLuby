import React from 'react'
import { ExpenseFrom } from './ExpenseForm'
import './newExpense.css'

export const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() }
    props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}
