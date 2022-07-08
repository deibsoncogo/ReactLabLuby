import React, { useState } from 'react'
import { ExpenseFrom } from './ExpenseForm'
import './NewExpense.css'

export const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {isEditing ? (
        <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
      ) : (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
    </div>
  )
}
