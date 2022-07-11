import React, { useState } from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import style from './style.module.css'

export const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [emailIsValid, setEmailIsValid] = useState()
  const [enteredPassword, setEnteredPassword] = useState('')
  const [passwordIsValid, setPasswordIsValid] = useState()
  const [formIsValid, setFormIsValid] = useState(false)

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value)

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    )
  }

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    )
  }

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'))
  }

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    props.onLogin(enteredEmail, enteredPassword)
  }

  return (
    <Card className={style.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${style.control} ${emailIsValid === false ? style.invalid : ''
            }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${style.control} ${passwordIsValid === false ? style.invalid : ''
            }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={style.actions}>
          <Button type='submit' className={style.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}
