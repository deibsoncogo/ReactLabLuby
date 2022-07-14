import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import style from './style.module.css'

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClose} />
}

const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  )
}

const portalELement = document.getElementById('overlays')

export const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalELement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalELement)}
    </Fragment>
  )
}
