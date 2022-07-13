import { Fragment } from 'react'
import { AvailableMeals } from '../availableMeals'
import { MealsSummary } from '../mealsSummary'
import style from './style.module.css'

export const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  )
}
