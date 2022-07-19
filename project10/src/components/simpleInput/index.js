import { useEffect, useRef, useState } from "react"

export const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name input is valid')
    }
  }, [enteredNameIsValid])

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    setEnteredNameTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }

    setEnteredNameIsValid(true)

    console.log('enteredName =>', enteredName)

    const enteredValue = nameInputRef.current.value
    console.log('enteredValue =>', enteredValue)

    setEnteredName('')
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>

      {nameInputIsInvalid && (<p className='error-text'>Name must not be empty</p>)}

      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  )
}
