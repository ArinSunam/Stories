import { configureStore } from "@reduxjs/toolkit";
import { BlogApi } from "./BlogApi";


export const store = configureStore({
  reducer: {
    [BlogApi.reducerPath]: BlogApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    BlogApi.middleware
  ])
});