import React from 'react'
import { Button } from "../ui/button";
import { Card } from '../ui/card'
import style from './style.module.css'

export const Home = (props) => {
  return (
    <Card className={style.home}>
      <h1>Welcome back</h1>
      <Button onCLick={props.onLogout}>Logout</Button>
    </Card>
  )
}
