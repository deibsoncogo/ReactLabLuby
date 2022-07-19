import { useReducer } from 'react'

const initialInputState = { value: '', isTouched: false }

const inputStateReducer = (state, action) => {
  if (action.type === 'input') {
    return { value: action.value, isTouched: state.isTouched }
  }

  if (action.type === 'blur') {
    return { value: state.value, isTouched: true }
  }

  if (action.type === 'reset') {
    return { value: '', isTouched: false }
  }

  return inputStateReducer
}

export const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

  const valueChangeHandler = (event) => { dispatch({ type: 'input', value: event.target.value }) }
  const inputBlurHandler = () => { dispatch({ type: 'blur' }) }
  const reset = () => { dispatch({ type: 'reset' }) }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }
}
