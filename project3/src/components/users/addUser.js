import React from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import style from './addUser.module.css'

export const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault()
  }

  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='userName'>User name</label>
        <input type='text' id='userName' />

        <label htmlFor='age'>Age (Years)</label>
        <input type='number' id='age' />

        <Button type='submit'>Add user</Button>
      </form>
    </Card>
  )
}
