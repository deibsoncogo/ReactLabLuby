import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { AuthContextProvider } from './store/authContext'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
)
