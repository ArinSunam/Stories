import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "./constant"


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    //Register

    register: builder.mutation({
      query: (data) => ({
        url: `/api/auth/register`,
        body: data,
        method: 'POST'

      })
    }),

    //login

    login: builder.mutation({
      query: (data) => ({
        url: `/api/auth/login`,
        body: data,
        method: 'POST'
      })
    }),
  })
});

export const { useRegisterMutation, useLoginMutation } = authApi;