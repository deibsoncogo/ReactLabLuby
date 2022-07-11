import React from 'react'
import ReactDom from 'react-dom'
import { Button } from './button'
import { Card } from './card'
import style from './errorModal.module.css'

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>

      <div className={style.content}>
        <p>{props.message}</p>
      </div>

      <footer className={style.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
}



export const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onConfirm} />, document.getElementById('backdropRoot')
      )}

      {ReactDom.createPortal(
        <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
        document.getElementById('backdropRoot')
      )}
    </React.Fragment>
  )
}
