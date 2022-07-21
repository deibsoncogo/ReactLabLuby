import { createSlice } from '@reduxjs/toolkit'

const initialState = { isAuthenticated: false }

const AuthSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },

    logout(state) {
      state.isAuthenticated = false
    },
  },
})

export const AuthActions = AuthSlice.actions
export const AuthReducer = AuthSlice.reducer
