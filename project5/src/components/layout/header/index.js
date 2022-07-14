import { Fragment } from 'react'
import mealsImage from '../../../assets/meals.jpg'
import { HeaderCartButton } from '../headerCartButton'
import style from './style.module.css'

export const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>ReactMeals</h1>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={style['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food' />
      </div>
    </Fragment>
  )
}
