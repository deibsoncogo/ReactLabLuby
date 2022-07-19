import { Fragment } from 'react'
import { AvailableMeals } from '../availableMeals'
import { MealsSummary } from '../mealsSummary'

export const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  )
}
