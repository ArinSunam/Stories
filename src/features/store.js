import { configureStore } from "@reduxjs/toolkit";
import { BlogApi } from "./BlogApi";
import { CatsApi } from "./CatsApi";
import { authApi } from "./authApi";

export const store = configureStore({
  reducer: {
    [BlogApi.reducerPath]: BlogApi.reducer,
    [CatsApi.reducerPath]: CatsApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    BlogApi.middleware,
    CatsApi.middleware,
    authApi.middleware
  ])
});