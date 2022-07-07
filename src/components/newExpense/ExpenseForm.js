import React, { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseFrom = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandle = (event) => { setEnteredTitle(event.target.value) }
  const amountChangeHandle = (event) => { setEnteredAmount(event.target.value) }
  const dateChangeHandle = (event) => { setEnteredDate(event.target.value) }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData)

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense-controls'>
        <div className='new-expense-control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandle} value={enteredTitle} />
        </div>

        <div className='new-expense-control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandle} value={enteredAmount} />
        </div>

        <div className='new-expense-control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandle} value={enteredDate} />
        </div>
      </div>

      <div className='new-expense-actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add expense</button>
      </div>
    </form>
  )
}
