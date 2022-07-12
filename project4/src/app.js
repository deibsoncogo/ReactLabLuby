import React, { useContext } from 'react'
import { Home } from './components/home'
import { Login } from './components/login'
import { MainHeader } from './components/mainHeader'
import { AuthContext } from './store/authContext'

export function App() {
  const ctx = useContext(AuthContext)

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  )
}
