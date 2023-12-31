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
    }),

    createPost: builder.mutation({
      query: ({ title, content }) => ({
        url: `/api/posts`,
        method: 'POST',
        body: { title, content }
      })
    })

  })
});

export const { useGetPostsQuery, useGetPostDetailQuery, useCreatePostMutation } = BlogApi