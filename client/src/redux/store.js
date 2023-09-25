import { configureStore } from '@reduxjs/toolkit'
import user from './reducers/user'
import blog from './reducers/blog'
export const store = configureStore({
  reducer: {
    user,
    blog,
  },
})
