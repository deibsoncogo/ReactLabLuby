import { Fragment, useState, useEffect } from 'react'
import { Users } from '../users'
import style from './style.module.css'

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
]

export const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setFilteredUsers(DUMMY_USERS.filter((user) => user.name.includes(searchTerm)))
  }, [searchTerm])

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <Fragment>
      <div className={style.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>

      <Users users={filteredUsers} />
    </Fragment>
  )
}
