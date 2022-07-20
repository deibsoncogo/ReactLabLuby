import { useRef } from 'react'
import style from './style.module.css'

export const Checkout = (props) => {
  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostalCode = postalCodeInputRef.current.value
    const enteredCity = cityInputRef.current.value
  }

  return (
    <form className={style.form} onSubmit={confirmHandler}>
      <div className={style.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' ref={nameInputRef} id='name' />
      </div>

      <div className={style.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' ref={streetInputRef} id='street' />
      </div>

      <div className={style.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' ref={postalInputRef} id='postal' />
      </div>

      <div className={style.control}>
        <label htmlFor='city'>City</label>
        <input type='text' ref={cityInputRef} id='city' />
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
