import React, { useState } from 'react'
import { Login } from './components/login'
import { Home } from './components/home'
import { MainHeader } from './components/mainHeader'

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
  }

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  )
}
