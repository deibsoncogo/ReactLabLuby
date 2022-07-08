import React from 'react'
import { CourseGoalItem } from '../courseGoalItem/CourseGoalItem'
import './CourseGoalList.css'

export const CourseGoalList = (props) => {
  return (
    <ul className='goal-list'>
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  )
}
