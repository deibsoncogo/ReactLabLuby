import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import style from './addUser.module.css'

export const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault()

    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) { return }
    if (+enteredAge < 1) { return }

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

  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='userName'>User name</label>
        <input id='userName' type='text' value={enteredUserName} onChange={userNameChangeHandler} />

        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />

        <Button type='submit'>Add user</Button>
      </form>
    </Card>
  )
}
