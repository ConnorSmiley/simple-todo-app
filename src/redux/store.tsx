import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counterSlice"
import postsReducer from "../redux/features/postSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,

  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
