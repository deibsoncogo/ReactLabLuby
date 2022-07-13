import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import style from './style.module.css'
import { AuthContext } from '../../store/authContext'
import { Input } from '../ui/input'

const emailReducer = ((state, action) => {
  if (action.type === 'userInput') {
    return { value: action.val, isValid: action.val.includes('@') }
  }

  if (action.type === 'inputBlur') {
    return { value: state.value, isValid: state.value.includes('@') }
  }

  return { value: '', isValid: false }
})

const passwordReducer = ((state, action) => {
  if (action.type === 'userInput') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }

  if (action.type === 'inputBlur') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }

  return { value: '', isValid: false }
})

export const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [emailIsValid, setEmailIsValid] = useState()
  // const [enteredPassword, setEnteredPassword] = useState('')
  // const [passwordIsValid, setPasswordIsValid] = useState()
  const [formIsValid, setFormIsValid] = useState(false)

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null })
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null })

  const authCtx = useContext(AuthContext)

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  useEffect(() => {
    console.log('Effect running')
    return () => { console.log('Effect cleanup') }
  }, [])

  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity')
      setFormIsValid(emailIsValid && passwordIsValid)
    }, 500)

    return () => {
      console.log('Cleanup')
      clearTimeout(identifier)
    }
  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'userInput', val: event.target.value })

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // )
  }

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'userInput', val: event.target.value })

    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // )
  }

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'inputBlur' })
  }

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'inputBlur' })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value)
    } else if (!emailIsValid) {
      emailInputRef.current.focus()
    } else {
      passwordInputRef.current.focus()
    }
  }

  return (
    <Card className={style.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id='email'
          label='E-mail'
          type='email'
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          ref={passwordInputRef}
          id='password'
          label='Password'
          type='password'
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={style.actions}>
          <Button type='submit' className={style.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}
