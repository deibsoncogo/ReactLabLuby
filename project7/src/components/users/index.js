import { Component } from 'react'
import { User } from '../user'
import style from './style.module.css'

export class Users extends Component {
  constructor() {
    super()
    this.state = { showUsers: true, more: 'Test' }
  }

  componentDidUpdate() {
    // try {
    //   someCodeWhichMightFail()
    // } catch (err) {
    //   // handle error
    // }
    if (this.props.users.length === 0) {
      throw new Error('No users provided')
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
        {this.props.users.map((user) => (
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
