import React from 'react'
import { Auth } from './components/auth'
import { Counter } from './components/counter'
import { Header } from './components/header'

export function App() {
  return (
    <React.Fragment>
      <Header />
      <Auth />
      <Counter />
    </React.Fragment>
  )
}
