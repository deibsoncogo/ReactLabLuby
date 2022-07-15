import { Component, Fragment } from 'react'
import { UsersContext } from '../../store/usersContext'
import { Users } from '../users'
import style from './style.module.css'

export class UserFinder extends Component {
  static contextType = UsersContext

  constructor() {
    super()
    this.state = { filteredUsers: [], searchTerm: '' }
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={style.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>

        <Users users={this.state.filteredUsers} />
      </Fragment>
    )
  }
}

// export const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS)
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     setFilteredUsers(DUMMY_USERS.filter((user) => user.name.includes(searchTerm)))
//   }, [searchTerm])

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value)
//   }

//   return (
//     <Fragment>
//       <div className={style.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>

//       <Users users={filteredUsers} />
//     </Fragment>
//   )
// }
