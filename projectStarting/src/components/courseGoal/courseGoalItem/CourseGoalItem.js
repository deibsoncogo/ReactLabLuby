import React from 'react'
import './CourseGoalItem.css'

export const CourseGoalItem = (props) => {
  // const [deleteText, setDeleteText] = useState('')

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)')
    props.onDelete(props.id)
  }

  return (
    <li className='goal-item' onClick={deleteHandler}>
      {props.children}
    </li>
  )
}
