import { UserFinder } from './components/userFinder'
import { UsersContext } from './store/usersContext';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

export function App() {
  const usersContext = { users: DUMMY_USERS }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  )
}
