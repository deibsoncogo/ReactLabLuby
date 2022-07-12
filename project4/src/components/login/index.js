import React, { useEffect, useReducer, useState } from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import style from './style.module.css'

const emailReducer = ((state, action) => {
  if (action.type === 'userInput') {
    return { value: action.val, isValid: action.val.includes('@') }
  }

  if (action.type === 'inputBlur') {
    return { value: state.value, isValid: state.value.includes('@') }
  }

  return { value: '', isValid: false }
})

export const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [emailIsValid, setEmailIsValid] = useState()
  const [enteredPassword, setEnteredPassword] = useState('')
  const [passwordIsValid, setPasswordIsValid] = useState()
  const [formIsValid, setFormIsValid] = useState(false)

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null })

  useEffect(() => {
    console.log('Effect running')

    return () => {
      console.log('Effect cleanup')
    }
  }, [])

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity')

  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     )
  //   }, 500)

  //   return ()  => {
  //     console.log('Cleanup')
  //     clearTimeout(identifier)
  //   }
  // }, [enteredEmail, enteredPassword])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'userInput', val: event.target.value })

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    )
  }

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    )
  }

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'inputBlur' })
  }

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    props.onLogin(emailState.value, enteredPassword)
  }

  return (
    <Card className={style.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${style.control} ${emailState.isValid === false ? style.invalid : ''
            }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={emailState.value}
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
