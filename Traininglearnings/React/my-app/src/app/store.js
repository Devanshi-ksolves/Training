import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../todo/todoslice'

export const store = configureStore({
    reducer: todoReducer
})