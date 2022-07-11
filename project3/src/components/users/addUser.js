import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { ErrorModal } from '../ui/errorModal'
import style from './addUser.module.css'

export const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault()

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (Non-empty values)'
      })

      return
    }


    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)'
      })

      return
    }


    props.onAddUser(enteredUserName, enteredAge)

    setEnteredUserName('')
    setEnteredAge('')
  }

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='userName'>User name</label>
          <input id='userName' type='text' value={enteredUserName} onChange={userNameChangeHandler} />

          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />

          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </>
  )
}
