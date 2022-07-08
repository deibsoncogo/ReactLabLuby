import React from 'react'

export const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor='userName'>User name</label>
      <input type='text' id='userName'/>

      <label htmlFor='age'>Age (Years)</label>
      <input type='number' id='age' />

      <button type='submit'>Add user</button>
    </form>
  )
}
