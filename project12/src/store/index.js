import { configureStore } from '@reduxjs/toolkit'
import { CounterReducer } from './counter'
import { AuthReducer } from './auth'

export const Store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth: AuthReducer,
  },
})
