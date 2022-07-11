import React, { Fragment, useState } from 'react'
import { AddUser } from './components/users/addUser'
import { UserList } from './components/users/userList'

export function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  )
}
