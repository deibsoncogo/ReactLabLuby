import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Auth } from './components/auth'
import { Counter } from './components/counter'
import { Header } from './components/header'
import { UserProfile } from './components/userProfile'

export function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <Fragment>
      <Header />

      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}

      <Counter />
    </Fragment>
  )
}
