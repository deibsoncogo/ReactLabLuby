import { useRef, useState } from 'react'
import style from './style.module.css'

const isEmpty = (value) => { return value.trim() === '' }
const isFiveChars = (value) => { return value.trim().length === 5 }

export const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  })

  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalCodeInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostalCode = postalCodeInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode)
    const enteredCityIsValid = !isEmpty(enteredCity)

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    })

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid

    if (!formIsValid) { return }
  }

  const nameControlStyle = `${style.control} ${formInputsValidity.name ? '' : style.invalid}`
  const streetControlStyle = `${style.control} ${formInputsValidity.street ? '' : style.invalid}`
  const postalCodeControlStyle = `${style.control} ${formInputsValidity.postalCode ? '' : style.invalid}`
  const cityControlStyle = `${style.control} ${formInputsValidity.city ? '' : style.invalid}`

  return (
    <form className={style.form} onSubmit={confirmHandler}>
      <div className={nameControlStyle}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' ref={nameInputRef} id='name' />

        {!formInputsValidity.name && (<p>Please enter a valid name</p>)}
      </div>

      <div className={streetControlStyle}>
        <label htmlFor='street'>Street</label>
        <input type='text' ref={streetInputRef} id='street' />

        {!formInputsValidity.street && (<p>Please enter a valid street</p>)}
      </div>

      <div className={postalCodeControlStyle}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' ref={postalCodeInputRef} id='postal' />

        {!formInputsValidity.postalCode && (<p>Please enter a valid postal code</p>)}
      </div>

      <div className={cityControlStyle}>
        <label htmlFor='city'>City</label>
        <input type='text' ref={cityInputRef} id='city' />

        {!formInputsValidity.city && (<p>Please enter a valid city</p>)}
      </div>

      <div className={style.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>

        <button className={style.submit}>
          Confirm
        </button>
      </div>
    </form>
  )
}
