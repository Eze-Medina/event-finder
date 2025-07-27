import { configureStore } from '@reduxjs/toolkit'
import { eventSlice } from './slices/event'

export const store = configureStore({
  reducer: {
    events: eventSlice.reducer,
  }})