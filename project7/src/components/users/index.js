import { Component, useState } from 'react'
import { User } from '../user'
import style from './style.module.css'

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
]

export class Users extends Component {
  constructor() {
    super()
    this.state = {
      showUsers: true,
      more: 'Test'
    }
  }

  toggleUsersHandler() {
    // this.state.showUsers = false
    this.setState((curState) => {
      return { showUsers: !curState.showUsers }
    })
  }

  render() {
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    )

    return (
      <div className={style.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>

        {this.state.showUsers && usersList}
      </div>
    )
  }
}

// export const Users = () => {
//   const [showUsers, setShowUsers] = useState(true)

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState)
//   }

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   )

//   return (
//     <div className={style.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>

//       {showUsers && usersList}
//     </div>
//   )
// }
