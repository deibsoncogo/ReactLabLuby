import React, { useState } from 'react'
import { Button } from "../../ui/button/Button";
import './CourseInput.css'

export const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('')

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    props.onAddGoal(enteredValue)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label>Course goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>

      <Button type='submit'>Add goal</Button>
    </form>
  )
}
