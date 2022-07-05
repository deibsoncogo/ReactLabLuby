import React, { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseFrom = () => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandle = (event) => { setEnteredTitle(event.target.value) }
  const amountChangeHandle = (event) => { setEnteredAmount(event.target.value) }
  const dateChangeHandle = (event) => { setEnteredDate(event.target.value) }

  return (
    <form>
      <div className='new-expense-controls'>
        <div className='new-expense-control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandle} />
        </div>

        <div className='new-expense-control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandle} />
        </div>

        <div className='new-expense-control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandle} />
        </div>
      </div>

      <div className='new-expense-actions'>
        <button type='submit'>Add expense</button>
      </div>
    </form>
  )
}
