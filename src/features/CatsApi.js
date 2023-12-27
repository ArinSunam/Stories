import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "./constant"


export const CatsApi = createApi({
  reducerPath: 'CatsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    getCategories: builder.query({
      query: () => ({
        url: `/api/categories`
      })
    }),



  })
});

export const { useGetCategoriesQuery, } = CatsApi