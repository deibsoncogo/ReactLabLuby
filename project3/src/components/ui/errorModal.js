import React from 'react'
import { Button } from './button'
import { Card } from './card'
import style from './errorModal.module.css'

export const ErrorModal = (props) => {
  return (
    <div>
      <div className={style.backdrop} />

      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={style.content}>
          <p>{props.message}</p>
        </div>

        <footer className={style.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  )
}
