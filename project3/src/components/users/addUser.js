import React, { useRef, useState } from 'react'
import { Wrapper } from '../helpers/wrapper'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { ErrorModal } from '../ui/errorModal'
import style from './addUser.module.css'

export const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (Non-empty values)'
      })

      return
    }

    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)'
      })

      return
    }

    props.onAddUser(enteredName, enteredUserAge)

    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='userName'>User name</label>
          <input id='userName' type='text' ref={nameInputRef} />

          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' ref={ageInputRef} />

          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </Wrapper>
  )
}
