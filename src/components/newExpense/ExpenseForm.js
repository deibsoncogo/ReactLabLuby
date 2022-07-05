import React, { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseFrom = () => {
  const [userInput, setUserInput] = useState({ enteredTitle: '', enteredAmount: '', enteredDate: '' })

  const titleChangeHandle = (event) => { setUserInput({ ...userInput, enteredTitle: event.target.value }) }
  const amountChangeHandle = (event) => { setUserInput({ ...userInput, enteredAmount: event.target.value }) }
  const dateChangeHandle = (event) => { setUserInput({ ...userInput, enteredDate: event.target.value }) }

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
