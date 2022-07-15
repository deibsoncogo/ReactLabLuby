import style from './User.module.css'

export const User = (props) => {
  return (
    <li className={style.user}>{props.name}</li>
  )
}
