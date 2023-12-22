import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "./constant"


export const BlogApi = createApi({
  reducerPath: 'BlogApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    getPosts: builder.query({
      query: () => ({
        url: `/api/posts`
      })
    }),

    getPostDetail: builder.query({
      query: () => ({
        url: `/api/posts/${id}`
         console.log(id)

      })

    })

  })
});

export const { useGetPostsQuery, useGetPostDetailQuery } = BlogApi