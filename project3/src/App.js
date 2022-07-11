import React from 'react'
import { AddUser } from './components/users/addUser'
import { UserList } from './components/users/userList'

export function App() {
  return (
    <div>
      <AddUser />
      <UserList users={[]} />
    </div>
  )
}
