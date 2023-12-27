import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "./constant"


export const BlogApi = createApi({
  reducerPath: 'BlogApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    getPosts: builder.query({
      query: (query) => ({
        url: `/api/posts`,
        params: {
          query: query

        }

      })
    }),

    getPostDetail: builder.query({
      query: (query) => ({
        url: `/api/posts/${query}`,

        method: 'GET'


      })

    })

  })
});

export const { useGetPostsQuery, useGetPostDetailQuery } = BlogApi