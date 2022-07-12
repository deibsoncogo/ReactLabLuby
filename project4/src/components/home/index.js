import React, { useContext } from 'react'
import { AuthContext } from '../../store/authContext';
import { Button } from "../ui/button";
import { Card } from '../ui/card'
import style from './style.module.css'

export const Home = (props) => {
  const authCtx = useContext(AuthContext)

  return (
    <Card className={style.home}>
      <h1>Welcome back</h1>
      <Button onCLick={authCtx.onLogout}>Logout</Button>
    </Card>
  )
}
